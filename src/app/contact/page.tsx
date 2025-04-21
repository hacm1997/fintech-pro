import { ContactContent } from "@/components/contact/contact";
import MainLayout from "@/components/layout/main-layout";

export default async function ContactPage() {

    return (
        <MainLayout>
            <ContactContent />
        </MainLayout>
    );
}