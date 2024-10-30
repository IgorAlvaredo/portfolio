
import LinkedinButton from "./buttons/LinkedinButton";
import GithubButton from "./buttons/GithubButton";
import WhatsAppButton from "./buttons/WhatsAppButton";

export default function Contact() {
    return (
        <div className="flex flex-row gap-4">
            <LinkedinButton/>

            <GithubButton/>

            <WhatsAppButton/>
        </div>
    );
}