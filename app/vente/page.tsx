import { Metadata } from "next";
import { getVenteAnnonces } from "@/lib/queries";
import { Case } from "@/components/ui/cases-with-infinite-scroll";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Nos ventes",
  description: "Découvrez tous nos biens à vendre",
};

export default async function VentePage() {

 

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb className="px-6 md:ml-24 mt-12">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Acceuil</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/vente">Vente</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
      </Breadcrumb>
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
        <div className="w-full m-auto text-center">
			    <Badge className="mt-8 md:mt-12 m-auto mb-4 bg-[#8e2024] hover:bg-[#8e2024]/90 text-white">Vente</Badge>
			    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold px-2">Un service complet et personnalisé</h1>
		    </div>    
         
          <p className="text-gray-600 text-base md:text-lg px-4 md:px-0">
            Plus qu'une simple recherche de personnes ou de biens, vous y retrouverez un service complet et personnalisé
            en fonction de vos besoins pour vous assurer :
          </p>
        </div>

        <Card className="mt-12 border-none shadow-none">
          <CardContent className="space-y-6 ">
            <ul className="space-y-4 flex flex-col items-start text-black dark:text-white px-4 md:px-8 lg:px-12">
              <li className="flex flex-col sm:flex-row sm:gap-2 w-full">
                <span className="font-semibold">- Une compétence</span>
                <span className="sm:ml-1">dans l'évaluation de la valeur de votre bien</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:gap-2 w-full">
                <span className="font-semibold">- La tranquilité</span>
                <span className="sm:ml-1">grâce à une prise en charge de chaque étape de la transaction</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:gap-2 w-full">
                <span className="font-semibold">- La sécurité</span>
                <span className="sm:ml-1">grâce à une étude précise des capacités financières des clients acquéreurs et/ou locataire</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:gap-2 w-full">
                <span className="font-semibold">- L'information</span>
                <span className="sm:ml-1">en restant en permanence à votre écoute</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:gap-2 w-full">
                <span className="font-semibold">- Le suivi</span>
                <span className="sm:ml-1">en représentant vos intérêts tout au long de notre partenariat</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative h-[540px] rounded-lg overflow-hidden">
            <img
              src="https://cabinet-michou.com/images/bandeau2.jpg"
              alt="Historic Parisian architecture"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
            <Badge className="bg-[#8e2024] hover:bg-[#8e2024]/90 text-white">Vente</Badge>
              <h3 className="text-black dark:text-white text-3xl md:text-4xl font-bold">Notre savoir-faire</h3>
            </div>

            <Card className="border-none shadow-none pt-11">
              <CardContent>
                <ul className="space-y-6 text-black dark:text-white px-4 md:px-0">
                  <li className="list-disc ml-5">Estimation du prix de vente du bien</li>
                  <li className="list-disc ml-5">Information du propriétaire</li>
                  <li className="list-disc ml-5">Mise en publicité de votre bien</li>
                  <li className="list-disc ml-5">Organisation et réalisation des visites</li>
                  <li className="list-disc ml-5">
                    <span className="block sm:inline">Coordination pendant le processus de vente entre les différents interlocuteurs :</span>
                    <span className="block sm:inline sm:ml-1">vendeur/acquéreur, notaires, confrères Syndic</span>
                  </li>
                  <li className="list-disc ml-5">
                    <span className="block sm:inline">Demande et suivi des diagnostiques techniques</span>
                    <span className="block sm:inline sm:ml-1">via une entreprise extérieure</span>
                  </li>
                  <li className="list-disc ml-5">
                    Négociation
                  </li>
                  <li className="list-disc ml-5">
                    Accompagnement jusqu'à la signature de l'acte définitif
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
