import Link from "next/link"
import { Badge } from "./badge"
import { Button } from "./button"
import { Building2, FileText, Key } from "lucide-react"

function Activities() {
  return (
    <div className="flex justify-center flex-col py-12 px-4 md:px-12 lg:px-40 overflow-hidden">
      <Badge className="mx-auto mb-4 bg-[#8e2024] hover:bg-[#8e2024]/90 text-white">Nos activités</Badge>
      <h1 className="text-center font-bold text-3xl md:text-4xl lg:text-6xl text-gray-900 dark:text-white mb-8">
        3 expertises dans <br className="md:hidden" /> l'immobilier
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div className="group flex flex-col h-full items-center text-center p-6 rounded-xl transition-all duration-300 hover:shadow-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
          <div className="mb-6 p-4 rounded-full bg-[#b69260]/10 dark:bg-[#b69260]/20 text-[#b69260] dark:text-[#b69260] transition-transform duration-300 group-hover:scale-110">
            <Building2 size={32} />
          </div>
          <h2 className="text-xl font-bold text-black dark:text-white mb-4">GESTION LOCATIVE</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
            Composée d'interlocuteurs de confiance, notre équipe de gestion locative assure l'entière gestion de vos
            biens immobiliers, qu'il s'agisse de locaux à usage commercial ou d'habitation.
          </p>
          <Link href={'gestion-locative'}>
            <Button
              size="sm"
              className="mt-auto bg-[#b69260] hover:bg-[#b69260]/90 text-white"
            >
              En savoir plus
            </Button>
          </Link>
        </div>

        <div className="group flex flex-col h-full items-center text-center p-6 rounded-xl transition-all duration-300 hover:shadow-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
          <div className="mb-6 p-4 rounded-full bg-[#b69260]/10 dark:bg-[#b69260]/20 text-[#b69260] dark:text-[#b69260] transition-transform duration-300 group-hover:scale-110">
            <Key size={32} />
          </div>
          <h2 className="text-xl font-bold text-black dark:text-white mb-4">VENTE</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
            Dans le cadre des missions de vente, notre cabinet se charge de visiter et estimer votre bien afin de vous
            accompagner au mieux dans votre projet immobilier.
          </p>
          <Link href={'/vente'}>
            <Button
              size="sm"
              className="mt-auto bg-[#b69260] hover:bg-[#b69260]/90 text-white"
            >
              En savoir plus
            </Button>
          </Link>
        </div>

        <div className="group flex flex-col h-full items-center text-center p-6 rounded-xl transition-all duration-300 hover:shadow-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
          <div className="mb-6 p-4 rounded-full bg-[#b69260]/10 dark:bg-[#b69260]/20 text-[#b69260] dark:text-[#b69260] transition-transform duration-300 group-hover:scale-110">
            <FileText size={32} />
          </div>
          <h2 className="text-xl font-bold text-black dark:text-white mb-4">SYNDIC</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
            Notre équipe de gestion de copropriétés se compose de gestionnaires, assistantes et comptables qui veillent
            au bon fonctionnement quotidien de votre immeuble et l'entretien de ses équipements.
          </p>
          <Link href={'/syndic'}>
            <Button
              size="sm"
              className="mt-auto bg-[#b69260] hover:bg-[#b69260]/90 text-white"
            >
              En savoir plus
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Activities
