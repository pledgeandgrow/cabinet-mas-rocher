import { Badge } from "@/components/ui/badge";

export default function ContactComponent() {
  return (
    <section className="w-full md:w-2/5 px-4 md:px-6 py-8 md:py-12">
      <div className="w-full mx-auto text-center md:text-left">
        <Badge
          variant={"outline"}
        >Services</Badge>
        <h2 className="text-2xl md:text-3xl font-extrabold text-black dark:text-white leading-tight mt-2">
          Nous appeler
        </h2>
      </div>

      <div className="mt-6 md:mt-8 space-y-4 mx-auto">
        <ContactItem
          icon="🏠"
          label="Gestion locative"
          number="01 48 87 94 78"
        />
        <ContactItem
          icon="🏢"
          label="Location"
          number="01 48 87 97 51"
        />
        <ContactItem icon="🛒" label="Vente" number="01 48 87 97 30" />
        <ContactItem icon="👥" label="Syndic" number="01 48 87 56 99" />
        <ContactItem
          icon="⚠️"
          label="Service d'urgence"
          number="Numéro disponible sur notre répondeur syndic"
        />
      </div>
    </section>
  );
}

function ContactItem({ icon, label, number }: { icon: string; label: string; number: string }) {
  return (
    <div className="flex items-start space-x-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
      <span className="text-2xl flex-shrink-0">{icon}</span>
      <div className="text-left">
        <p className="text-base md:text-lg font-bold text-gray-500">
          {label}
        </p>
        <p className="text-gray-800 font-light text-sm md:text-base dark:text-gray-200">{number}</p>
      </div>
    </div>
  );
}
