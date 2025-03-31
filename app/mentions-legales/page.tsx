import { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Mentions Légales | Cabinet Mas Rocher",
  description: "Mentions légales du Cabinet Mas Rocher - Informations sur l'éditeur, l'hébergeur et les conditions d'utilisation du site.",
}

export default function MentionsLegales() {
  return (
    <div className="container py-8 space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">Mentions Légales</h1>
      
      <div className="grid gap-6">
        {/* Éditeur */}
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Site édité par</h2>
            <div className="space-y-2 text-muted-foreground">
              <p className="font-medium text-foreground">Cabinet Mas Rocher</p>
              <p>20 rue Malher - 75004 Paris - France</p>
              <p>Tel : +33.(0)1.48.87.56.99</p>
              <p>Adresse e-mail : cabinet@cabinet-mas-rocher.com</p>
              <Separator className="my-4" />
              <div className="space-y-2">
                <p>SAS au capital de 75 000,00 €</p>
                <p>Immatriculée au Registre du commerce et des Sociétés de Paris sous le N° 349504548</p>
                <p>N° SIRET : 349 504 548 00042</p>
                <p>Cartes professionnelles :</p>
                <ul className="list-disc list-inside ml-4">
                  <li>Gestion : G1321</li>
                  <li>Transaction : T2996</li>
                </ul>
              </div>
              <Separator className="my-4" />
              <p>Directeurs de la publication :</p>
              <ul className="list-disc list-inside ml-4">
                <li>Mme Angélique Mouton-Baboz</li>
                <li>M. Alexandre Baboz</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Hébergeur */}
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Site hébergé par</h2>
            <div className="space-y-2 text-muted-foreground">
              <p className="font-medium text-foreground">Colombia</p>
              <p>32c avenue Oudinot - 94340 Joinville le Pont - France</p>
              <p>Tél : +33 7 53 69 58 40</p>
              <p>Site web : <a href="http://www.colombia.fr" className="text-primary hover:underline">www.colombia.fr</a></p>
            </div>
          </CardContent>
        </Card>

        {/* Réalisation */}
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Site réalisé par</h2>
            <div className="space-y-2 text-muted-foreground">
              <p className="font-medium text-foreground">PLEDGE AND GROW</p>
              <p>4bis rue Alfred Nobel - 77420 Champs-sur-Marne - France</p>
              <p>Tél : +33.7.53.69.58.40</p>
              <p>Adresse e-mail : contact@pledgeandgrow.com</p>
              <p>Site web : <a href="https://pledgeandgrow.com/" className="text-primary hover:underline">pledgeandgrow.com/</a></p>
            </div>
          </CardContent>
        </Card>

        {/* Conditions d'utilisation */}
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Conditions d'utilisation</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                La SAS Cabinet Mas Rocher informe les internautes que les informations figurant sur le site ne constituent 
                en rien des consultations ou des avis d'ordre juridique, il ne s'agit que d'informations d'ordre général qui n'ont 
                pas vocation à répondre à des questions particulières.
              </p>
              <p>
                La responsabilité professionnelle de la SAS Cabinet Mas Rocher ne saurait dès lors être engagée du fait 
                des informations figurant sur ce site.
              </p>
              <Separator className="my-4" />
              <p>
                L'ensemble des éléments graphiques, textuels et informatiques du site cabinet-michou.com ainsi que la marque 
                et le logo Cabinet Cabinet Mas Rocher sont la propriété de la SAS Cabinet Mas Rocher. Toute reproduction, 
                diffusion ou utilisation de quelque nature que ce soit sans l'autorisation expresse de la SAS Cabinet Mas Rocher est interdite et donnera lieu à des poursuites.
              </p>
              <Separator className="my-4" />
              <p>
                Les internautes sont formellement informés que les sites auxquels ils peuvent accéder par l'intermédiaire des 
                liens hypertextes présents sur le site n'appartiennent pas à la SAS Cabinet Mas Rocher En conséquence 
                cette dernière décline toute responsabilité quant au contenu des informations fournies sur ces sites auxquels 
                les liens pourront renvoyer.
              </p>
              <p>
                Les internautes qui souhaiteraient mettre en place un lien hypertexte en direction du site cabinet-michou.com 
                en feront la demande préalable au directeur de la publication. Tout lien hypertexte en direction du site mis en 
                place sans cet accord est interdit.
              </p>
              <Separator className="my-4" />
              <p>
                La SAS Cabinet Mas Rocher rappelle aux internautes les caractéristiques et les limites du réseau internet 
                et décline toute responsabilité liée aux conséquences de leur connexion à ce réseau via le site cabinet-michou.com. 
                Plus particulièrement, la SAS Cabinet Mas Rocher ne saurait être tenue responsable de tout dommage, matériel 
                ou immatériel causé aux internautes, à leurs équipements informatiques et aux données qui y sont stockées, et aux 
                conséquences pouvant en découler sur leur activité personnelle, professionnelle ou commerciale.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* RGPD */}
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Protection des données personnelles</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Conformément à la loi Informatique et Libertés, les internautes bénéficient d'un droit individuel d'accès, 
                de modification, de rectification et de suppression des informations personnelles les concernant qui pourra 
                être exercé en adressant un courrier électronique à l'adresse cabinet@mas-rocher.com
              </p>
              <p>
                Pour plus d'informations sur notre politique de traitement des données personnelles, veuillez consulter notre{" "}
                <a 
                  href="https://www.declarations-juridiques.fr/login" 
                  className="text-primary hover:underline"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  politique de traitement RGPD
                </a>.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}