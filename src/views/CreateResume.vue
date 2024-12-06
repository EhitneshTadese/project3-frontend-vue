<template>
    <h1>Create Resume</h1>
    <h4>{{ message }}</h4>
    <v-container>
        <v-card>
            <v-card-title>Create Resume</v-card-title>
            <v-card-text>
                <v-form ref="form" v-model="valid">
                    <!-- User Basic Information Section -->
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="tutorial.name"
                                label="Name"
                                :rules="[rules.required]"
                            />
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="tutorial.email"
                                label="Email"
                                :rules="[rules.required, rules.email]"
                            />
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="tutorial.address"
                                label="Address"
                                :rules="[rules.required]"
                            />
                        </v-col>
                    </v-row>

                    <!-- Resume Section -->
                    <v-divider class="my-4"></v-divider>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-text-field
                                label="Resume Name"
                                v-model="tutorial.resumeName"
                                :rules="[rules.required]"
                            />
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field
                                label="Template Type"
                                v-model="tutorial.templateType"
                            />
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field
                                label="Introduction"
                                v-model="tutorial.introduction"
                            />
                        </v-col>
                    </v-row>

                    <!-- Education Section -->
                    <v-divider class="my-4"></v-divider>
                    <h3>Education</h3>
                    <v-row v-for="(edu, index) in tutorial.education" :key="'edu-'+index">
                        <v-col cols="12" md="4">
                            <v-text-field
                                label="Degree"
                                v-model="edu.degree"
                            />
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field
                                label="Institution"
                                v-model="edu.institution"
                            />
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-text-field
                                label="Graduation Date"
                                v-model="edu.graduationDate"
                                type="date"
                            />
                        </v-col>
                        <v-col cols="12" md="1">
                            <v-btn icon color="error" @click="removeEducation(index)" v-if="tutorial.education.length > 1">
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                    <v-btn @click="addEducation" color="primary" class="mb-4">Add Education</v-btn>

                    <!-- Experience Section -->
                    <v-divider class="my-4"></v-divider>
                    <h3>Experience</h3>
                    <v-row v-for="(exp, index) in tutorial.experience" :key="'exp-'+index">
                        <v-col cols="12" md="4">
                            <v-text-field
                                label="Job Title"
                                v-model="exp.jobTitle"
                            />
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field
                                label="Company Name"
                                v-model="exp.companyName"
                            />
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-text-field
                                label="Start Date"
                                v-model="exp.startDate"
                                type="date"
                            />
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-text-field
                                label="End Date"
                                v-model="exp.endDate"
                                type="date"
                            />
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-text-field
                                label="Job Description"
                                v-model="exp.description"
                            />
                        </v-col>
                        <v-col cols="12" md="1">
                            <v-btn icon color="error" @click="removeExperience(index)" v-if="tutorial.experience.length > 1">
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                    <v-btn @click="addExperience" color="primary" class="mb-4">Add Experience</v-btn>

                    <!-- Skills Section -->
                    <v-divider class="my-4"></v-divider>
                    <h3>Skills</h3>
                    <v-row v-for="(skill, index) in tutorial.skills" :key="'skill-'+index">
                        <v-col cols="12" md="5">
                            <v-text-field
                                label="Skill Name"
                                v-model="skill.name"
                            />
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field
                                label="Proficiency Level"
                                v-model="skill.proficiency"
                            />
                        </v-col>
                        <v-col cols="12" md="1">
                            <v-btn icon color="error" @click="removeSkill(index)" v-if="tutorial.skills.length > 1">
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                    <v-btn @click="addSkill" color="primary" class="mb-4">Add Skill</v-btn>

                    <!-- Awards Section -->
                    <v-divider class="my-4"></v-divider>
                    <h3>Awards</h3>
                    <v-row v-for="(award, index) in tutorial.awards" :key="'award-'+index">
                        <v-col cols="12" md="5">
                            <v-text-field
                                label="Award Name"
                                v-model="award.name"
                            />
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field
                                label="Date Earned"
                                v-model="award.date"
                                type="date"
                            />
                        </v-col>
                        <v-col cols="12" md="1">
                            <v-btn icon color="error" @click="removeAward(index)" v-if="tutorial.awards.length > 1">
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                    <v-btn @click="addAward" color="primary" class="mb-4">Add Award</v-btn>

                    <!-- Projects Section -->
                    <v-divider class="my-4"></v-divider>
                    <h3>Projects</h3>
                    <v-row v-for="(project, index) in tutorial.projects" :key="'proj-'+index">
                        <v-col cols="12" md="4">
                            <v-text-field
                                label="Project Name"
                                v-model="project.name"
                            />
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field
                                label="Description"
                                v-model="project.description"
                            />
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-text-field
                                label="Project Link"
                                v-model="project.link"
                            />
                        </v-col>
                        <v-col cols="12" md="1">
                            <v-btn icon color="error" @click="removeProject(index)" v-if="tutorial.projects.length > 1">
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                    <v-btn @click="addProject" color="primary" class="mb-4">Add Project</v-btn>

                    <v-row justify="center">
                        <v-col col="2">
                            <v-btn style="background-color: #7DE2D1;" @click="submitTutorial">Submit</v-btn>
                        </v-col>
                        <v-col col="2">
                            <v-btn color="red" @click="cancel">Cancel</v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";

export default {
    name: "CreateResume",
    data() {
        return {
            valid: false,
            tutorial: {
                name: "",
                email: "",
                address: "",
                resumeName: "",
                templateType: "",
                introduction: "",
                education: [{ 
                    degree: "",
                    institution: "",
                    graduationDate: ""
                }],
                experience: [{
                    jobTitle: "",
                    companyName: "",
                    startDate: "",
                    endDate: "",
                    description: ""
                }],
                skills: [{ 
                    name: "", 
                    proficiency: "" 
                }],
                awards: [{ 
                    name: "", 
                    date: "" 
                }],
                projects: [{ 
                    name: "", 
                    description: "", 
                    link: "" 
                }]
            },
            message: "Enter data and click Submit",
            rules: {
                required: value => !!value || "Required.",
                email: value => /.+@.+\..+/.test(value) || "E-mail must be valid."
            }
        };
    },
    created() {
        const resumeId = this.$route.params.id;
        if (resumeId) {
            const resumes = JSON.parse(localStorage.getItem('resumes')) || [];
            const existingResume = resumes.find(resume => resume.id === parseInt(resumeId));
            if (existingResume) {
                this.tutorial = { ...existingResume };
            }
        }
    },
    methods: {
        async submitTutorial() {
            if (this.$refs.form.validate()) {
                try {
                    this.message = "Submitting...";
                    
                    // Create a new resume object with all the necessary data
                    const newResume = {
                        id: Date.now(),
                        uploadDate: new Date().toISOString(),
                        resumeName: this.tutorial.resumeName || 'Untitled Resume',
                        name: this.tutorial.name,
                        email: this.tutorial.email,
                        address: this.tutorial.address,
                        introduction: this.tutorial.introduction,
                        templateType: this.tutorial.templateType,
                        education: { ...this.tutorial.education },
                        experience: { ...this.tutorial.experience },
                        projects: [...this.tutorial.projects],
                        skills: [...this.tutorial.skills],
                        awards: [...this.tutorial.awards]
                    };
                    const index = resumes.findIndex(resume => resume.id === newResume.id);
                    if (index !== -1) {
                        resumes[index] = newResume; // Update existing resume
                    } else {
                        resumes.push(newResume); // Add new resume
                    }
                    localStorage.setItem('resumes', JSON.stringify(resumes));

                    console.log("Resume created successfully:", newResume);
                    this.message = "Resume created successfully!";
                    
                    // Redirect to the resume view page after successful creation
                    this.$router.push({ 
                        name: 'resume-view', 
                        params: { id: newResume.id }
                    });
                } catch (error) {
                    console.error("Error creating resume:", error);
                    this.message = "Error creating resume: " + error.message;
                }
            }
        },
        cancel() {
            this.$router.push({ name: 'account' });
        },
        addEducation() {
            this.tutorial.education.push({
                degree: "",
                institution: "",
                graduationDate: ""
            });
        },
        removeEducation(index) {
            if (this.tutorial.education.length > 1) {
                this.tutorial.education.splice(index, 1);
            }
        },
        addExperience() {
            this.tutorial.experience.push({
                jobTitle: "",
                companyName: "",
                startDate: "",
                endDate: "",
                description: ""
            });
        },
        removeExperience(index) {
            if (this.tutorial.experience.length > 1) {
                this.tutorial.experience.splice(index, 1);
            }
        },
        addSkill() {
            this.tutorial.skills.push({
                name: "",
                proficiency: ""
            });
        },
        removeSkill(index) {
            if (this.tutorial.skills.length > 1) {
                this.tutorial.skills.splice(index, 1);
            }
        },
        addAward() {
            this.tutorial.awards.push({
                name: "",
                date: ""
            });
        },
        removeAward(index) {
            if (this.tutorial.awards.length > 1) {
                this.tutorial.awards.splice(index, 1);
            }
        },
        addProject() {
            this.tutorial.projects.push({
                name: "",
                description: "",
                link: ""
            });
        },
        removeProject(index) {
            if (this.tutorial.projects.length > 1) {
                this.tutorial.projects.splice(index, 1);
            }
        }
    }
}
</script>
<style scoped>
.resume-preview {
    border: 1px solid #ccc;
    padding: 20px;
    margin-top: 20px;
}
.mb-4 {
    margin-bottom: 1rem;
}
</style>
