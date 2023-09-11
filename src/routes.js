import {createRouter, createWebHistory} from 'vue-router';
import Selfie from '@/components/Selfie.vue';
import HighSchoolPhoto from '@/components/HighSchoolPhoto.vue';
import Story from '@/components/Story.vue';
import RepositoryLink from "@/components/RepositoryLink.vue";
import CssFeatureVideo from "@/components/CssFeatureVideo.vue";
import JSActivity from "@/components/JSActivity.vue";

const routes = [
    {path: '/'},
    {path: '/selfie', component: Selfie},
    {path: '/high-school-photo', component: HighSchoolPhoto},
    {path: '/story', component: Story},
    {path: '/repository', component: RepositoryLink},
    {path: '/lesson', component: CssFeatureVideo},
    {path: '/jsActivity', component: JSActivity}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;