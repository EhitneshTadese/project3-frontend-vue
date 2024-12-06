export default class ResumeParser {
  static parseResume(text) {
    const parsed = {
      name: '',
      phone: '',
      email: '',
      address: '',
      professionalSummary: '',
      education: [],
      experience: [],
      skills: [],
      awards: [],
      activities: '',
      computerSkills: []
    };

    try {
      // Extract email
      const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
      const emailMatch = text.match(emailRegex);
      if (emailMatch) {
        parsed.email = emailMatch[0];
      }

      // Extract phone number
      const phoneRegex = /(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/g;
      const phoneMatch = text.match(phoneRegex);
      if (phoneMatch) {
        parsed.phone = phoneMatch[0];
      }

      // Extract name (assuming it's at the beginning of the resume)
      const lines = text.split('\n');
      const nameRegex = /^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/;
      for (const line of lines) {
        const trimmedLine = line.trim();
        if (nameRegex.test(trimmedLine)) {
          parsed.name = trimmedLine;
          break;
        }
      }

      // Extract education
      const educationSection = this.extractSection(text, 'EDUCATION', 'EXPERIENCE');
      if (educationSection) {
        const eduEntries = educationSection.split('\n\n');
        parsed.education = eduEntries.map(entry => {
          const lines = entry.split('\n');
          const degreeMatch = lines.find(line => line.includes('Bachelor') || line.includes('Master') || line.includes('Ph.D'));
          const gpaMatch = lines.find(line => line.includes('GPA'));
          
          return {
            institution: lines[0]?.trim() || '',
            degree: degreeMatch?.trim() || '',
            graduationDate: '',
            gpa: gpaMatch ? gpaMatch.match(/\d+\.\d+/)?.[0] || '' : ''
          };
        }).filter(edu => edu.institution || edu.degree);
      }

      // Extract experience
      const experienceSection = this.extractSection(text, 'EXPERIENCE', 'SKILLS');
      if (experienceSection) {
        const expEntries = experienceSection.split('\n\n');
        parsed.experience = expEntries.map(entry => {
          const lines = entry.split('\n');
          const titleLine = lines[0]?.trim() || '';
          const [title, company] = titleLine.split(',').map(s => s.trim());
          
          return {
            jobTitle: title || '',
            companyName: company || '',
            startDate: '',
            endDate: '',
            description: lines.slice(1).join('\n').trim()
          };
        }).filter(exp => exp.jobTitle || exp.companyName);
      }

      // Extract skills
      const skillsSection = this.extractSection(text, 'SKILLS', 'AWARDS');
      if (skillsSection) {
        const skillsList = skillsSection.split(',').map(skill => skill.trim());
        parsed.skills = skillsList.map(skill => ({
          name: skill,
          proficiency: 'Intermediate' // Default value
        })).filter(skill => skill.name);
      }

      // Extract professional summary
      const summarySection = this.extractSection(text, 'PROFESSIONAL SUMMARY', 'EDUCATION');
      if (summarySection) {
        parsed.professionalSummary = summarySection.trim();
      }

    } catch (error) {
      console.error('Error parsing resume:', error);
    }

    return parsed;
  }

  static extractSection(text, startMarker, endMarker) {
    const startIndex = text.indexOf(startMarker);
    if (startIndex === -1) return '';

    const endIndex = text.indexOf(endMarker, startIndex);
    if (endIndex === -1) return text.slice(startIndex + startMarker.length).trim();

    return text.slice(startIndex + startMarker.length, endIndex).trim();
  }
} 