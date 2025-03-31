import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "./ui/badge"
import Link from "next/link"
import Image from "next/image"

const newsItems = [
  {
    title: "Good Loc",
    content:
      "Afin de certifier vos locataires, le cabinet Mas Rocher s'engage auprès de Good loc de Verlingue, votre garantie loyer impayée",
  },
  {
    title: "Retrouvez-nous sur Instagram",
    content: (
      <div className="flex flex-col items-start gap-4">
        <p>Tous nos derniers posts</p>
        <Link target="_blank" href={'https://www.instagram.com/cabinetrmichou'} className={`bg-[#8e2024] hover:bg-[#8e2024]/90 ${buttonVariants()}`}>Cliquez ici</Link>
      </div>
    ),
  },
]

export default function NewsSections() {
  return (
    <div className="container mx-auto  py-12 px-6 md:px-12 lg:px-24">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
          <Image
            src="/cabinet.jpg"
            alt="Cabinet Mas Rocher"
            fill
            className="object-cover"
            priority
          />
        </div>
        <Carousel className="w-full">
          <CarouselContent>
            {newsItems.map((item, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col">
                  <div className="mb-6">
                    <Badge className="bg-[#8e2024] hover:bg-[#8e2024]/90 text-white">ACTUALITÉS</Badge>
                  </div>
                  <h2 className="text-black dark:text-white font-bold text-3xl md:text-4xl mb-6">{item.title}</h2>
                  <div className="text-gray-600 dark:text-gray-300 space-y-4">{item.content}</div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex gap-4 mt-8">
            <CarouselPrevious className="relative static left-0 right-0 translate-x-0 translate-y-0" />
            <CarouselNext className="relative static left-0 right-0 translate-x-0 translate-y-0" />
          </div>
        </Carousel>
      </div>
    </div>
  )
}
