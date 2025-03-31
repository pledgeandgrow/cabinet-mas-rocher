"use client";

import { Badge } from "@/components/ui/badge";
import * as React from "react";
import document from "../../public/3.jpg";
import Image from "next/image";
import { Check } from "lucide-react";

const BannerDocument: React.FC = () => {
    return (
        <div className="container mx-auto my-24 md:my-48">
            <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 px-6 md:px-0">
                    <div className="max-w-lg">
                        <Badge variant={"default"} className="bg-[#8e2024] hover:bg-[#8e2024]/90 text-white">Locataire</Badge>
                        <h1 className="text-4xl md:text-5xl font-bold my-4">Documents à fournir</h1>
                        <ul className="space-y-4 mt-8">
                            <li className="flex items-center gap-3">
                                <Check className="text-green-500 h-5 w-5 flex-shrink-0" />
                                <span className="text-base">Carte d'identité</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="text-green-500 h-5 w-5 flex-shrink-0" />
                                <span className="text-base">Relevé d'Identité Bancaire</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="text-green-500 h-5 w-5 flex-shrink-0" />
                                <span className="text-base">3 derniers bulletins de salaire</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="text-green-500 h-5 w-5 flex-shrink-0" />
                                <span className="text-base">Dernier avis d'imposition complet</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="text-green-500 h-5 w-5 flex-shrink-0" />
                                <span className="text-base">3 dernières quittances de loyer (ou copie de l'avis Taxe Foncière si propriétaire)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="text-green-500 h-5 w-5 flex-shrink-0" />
                                <span className="text-base">Attestation employeur ou copie contrat de travail</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="hidden md:flex md:w-1/2 justify-end pr-6 md:pr-0">
                    <div className="max-w-lg">
                        <Image 
                            src={document} 
                            alt="document"
                            height={400}
                            width={500}
                            className="rounded-lg shadow-lg object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerDocument;