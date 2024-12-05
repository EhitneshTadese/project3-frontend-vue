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
                    <v-row>
                        <v-col cols="4">
                            <v-text-field
                                label="Degree"
                                v-model="tutorial.education.degree"
                            />
                        </v-col>
                        <v-col cols="4">
                            <v-text-field
                                label="Institution"
                                v-model="tutorial.education.institution"
                            />
                        </v-col>
                        <v-col cols="4">
                            <v-text-field
                                label="Graduation Date"
                                v-model="tutorial.education.graduationDate"
                                type="date"
                            />
                        </v-col>
                    </v-row>

                    <!-- Experience Section -->
                    <v-divider class="my-4"></v-divider>
                    <h3>Experience</h3>
                    <v-row>
                        <v-col cols="4">
                            <v-text-field
                                label="Job Title"
                                v-model="tutorial.experience.jobTitle"
                            />
                        </v-col>
                        <v-col cols="4">
                            <v-text-field
                                label="Company Name"
                                v-model="tutorial.experience.companyName"
                            />
                        </v-col>
                        <v-col cols="4">
                            <v-text-field
                                label="Start Date"
                                v-model="tutorial.experience.startDate"
                                type="date"
                            />
                        </v-col>
                        <v-col cols="4">
                            <v-text-field
                                label="End Date"
                                v-model="tutorial.experience.endDate"
                                type="date"
                            />
                        </v-col>
                        <v-col cols="4">
                            <v-text-field
                                label="Job Description"
                                v-model="tutorial.experience.description"
                            />
                        </v-col>
                    </v-row>

                    <!-- Projects Section -->
                    <v-divider class="my-4"></v-divider>
                    <h3>Projects</h3>
                    <v-row>
                        <v-col cols="4">
                            <v-text-field
                                label="Project Name"
                                v-model="tutorial.projects[0].name"
                            />
                        </v-col>
                        <v-col cols="4">
                            <v-text-field
                                label="Description"
                                v-model="tutorial.projects[0].description"
                            />
                        </v-col>
                        <v-col cols="4">
                            <v-text-field
                                label="Project Link"
                                v-model="tutorial.projects[0].link"
                            />
                        </v-col>
                    </v-row>

                    <!-- Skills Section -->
                    <v-divider class="my-4"></v-divider>
                    <h3>Skills</h3>
                    <v-row>
                        <v-col cols="4">
                            <v-text-field
                                label="Skill Name"
                                v-model="tutorial.skills[0].name"
                            />
                        </v-col>
                        <v-col cols="4">
                            <v-text-field
                                label="Proficiency Level"
                                v-model="tutorial.skills[0].proficiency"
                            />
                        </v-col>
                    </v-row>

                    <!-- Awards Section -->
                    <v-divider class="my-4"></v-divider>
                    <h3>Awards</h3>
                    <v-row>
                        <v-col cols="4">
                            <v-text-field
                                label="Award Name"
                                v-model="tutorial.awards[0].name"
                            />
                        </v-col>
                        <v-col cols="4">
                            <v-text-field
                                label="Date Earned"
                                v-model="tutorial.awards[0].date"
                                type="date"
                            />
                        </v-col>
                    </v-row>

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
                education: {
                    degree: "",
                    institution: "",
                    graduationDate: ""
                },
                experience: {
                    jobTitle: "",
                    companyName: "",
                    startDate: "",
                    endDate: "",
                    description: ""
                },
                projects: [{ name: "", description: "", link: "" }],
                skills: [{ name: "", proficiency: "" }],
                awards: [{ name: "", date: "" }]
            },
            message: "Enter data and click Submit",
            rules: {
                required: value => !!value || "Required.",
                email: value => /.+@.+\..+/.test(value) || "E-mail must be valid."
            }
        };
    },
    methods: {
        async submitTutorial() {
            if (this.$refs.form.validate()) {
                try {
                    this.message = "Submitting...";
                    
                    // Directly save the tutorial data to local storage
                    const resumes = JSON.parse(localStorage.getItem('resumes')) || [];
                    const newResume = {
                        id: Date.now(), // Generate a unique ID based on the current timestamp
                        ...this.tutorial // Spread the tutorial data
                    };
                    resumes.push(newResume);
                    localStorage.setItem('resumes', JSON.stringify(resumes));

                    console.log("Resume created successfully:", newResume);
                    this.message = "Resume created successfully!";
                    
                    // Redirect to the resume view page after successful creation
                    // Ensure the route name matches your router configuration
                    this.$router.push({ 
                        name: 'resume-view', 
                        params: { id: newResume.id } // Ensure this matches your route definition
                    });
                } catch (error) {
                    console.error("Error creating resume:", error);
                    this.message = "Error creating resume: " + error.message;
                }
            }
        },
        cancel() {
            this.$router.push({ name: 'account' });
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
</style>
