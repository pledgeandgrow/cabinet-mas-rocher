"use client";

import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import * as React from "react";
import { TabsTransitionPanel } from "@/app/components/tabs-transition-panel";
import BannerInformative from "@/app/components/banner-informative";
import BannerDocument from "@/app/components/banner-document";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Feature } from "@/components/ui/gestion-locative-services";
import { ArrowRight } from "lucide-react";

const GestionLocative: React.FC = () => {
    return (
        <>
            <Breadcrumb className="px-6 md:ml-24 mt-12">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Acceuil</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/gestion-locative">Gestion locative</BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className="w-full my-24 flex flex-col items-center">
                <div className="w-full m-auto text-center">
                    <Badge className="mt-12 m-auto mb-4 bg-[#8e2024] hover:bg-[#8e2024]/90 text-white">GESTION LOCATIVE</Badge>
                    <h1 className="text-7xl font-bold">Notre équipe</h1>
                </div>
                <TabsTransitionPanel />
            </div>
            <Separator />
            <Feature/>
            <section className="container mx-auto px-4 py-16 md:py-24">
        
           </section>
            <Separator />
            <BannerInformative type="gestion-locative" />
            <BannerDocument />
            <div className="w-full flex justify-center my-24">
           
            </div>
            <div className="container mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-[410px] rounded-lg overflow-hidden">
                    <img
                      src="https://cabinet-michou.com/images/gestion/3.jpg"
                      alt="Parisian building with fountain"
                      className="object-cover w-full h-full"
                    />
                </div>
                <div className="space-y-6 px-6 md:px-0">
                  <Badge className="mb-4 bg-[#8e2024] hover:bg-[#8e2024]/90 text-white">Locataire</Badge>
                  <h3 className="text-black dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold">Visite, acceptation dossier et signature du bail</h3>
                    <Card className="bg-transparent border-none shadow-none">
                      <CardContent className="space-y-6 text-gray-600 px-0">
                        <p className='text-black dark:text-white'>
                        Nous effectuons des visites individuelles, sur rendez-vous, par notre cabinet. Votre dossier fait l'objet d'une étude précise et sérieuse. Nous le transmettons pour accord à notre client.
                        Une fois le dossier accepté, nous organisons rapidement votre entrée dans les lieux, procédons à la signature du bail (par voie électronique) et à un état des lieux par une société spécialisée et intègre.
                        </p>
                      </CardContent>
                    </Card>
                </div>
              </div>
            </div>
           <Feature />

           <div className="flex justify-center my-12">
             <Link href="/annonces" >
                <Button variant="default" className="flex items-center gap-2 mx-auto bg-[#8e2024] hover:bg-[#8e2024]/90 text-white">
                  Voir nos annonces
                  <ArrowRight size={16} />
                </Button>
             </Link>
           </div>
        </>
    );
}

export default GestionLocative;