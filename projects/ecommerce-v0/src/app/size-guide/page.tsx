"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { FiInfo } from "react-icons/fi";
import { TfiRuler } from "react-icons/tfi";

export default function SizeGuidePage() {
  const clothingSizes = {
    women: [
      { size: "XS", chest: "32-34", waist: "24-26", hips: "34-36" },
      { size: "S", chest: "34-36", waist: "26-28", hips: "36-38" },
      { size: "M", chest: "36-38", waist: "28-30", hips: "38-40" },
      { size: "L", chest: "38-40", waist: "30-32", hips: "40-42" },
      { size: "XL", chest: "40-42", waist: "32-34", hips: "42-44" },
      { size: "XXL", chest: "42-44", waist: "34-36", hips: "44-46" },
    ],
    men: [
      { size: "XS", chest: "34-36", waist: "28-30", hips: "34-36" },
      { size: "S", chest: "36-38", waist: "30-32", hips: "36-38" },
      { size: "M", chest: "38-40", waist: "32-34", hips: "38-40" },
      { size: "L", chest: "40-42", waist: "34-36", hips: "40-42" },
      { size: "XL", chest: "42-44", waist: "36-38", hips: "42-44" },
      { size: "XXL", chest: "44-46", waist: "38-40", hips: "44-46" },
    ],
  };

  const shoeSizes = {
    women: [
      { us: "5", uk: "2.5", eu: "35", cm: "22" },
      { us: "5.5", uk: "3", eu: "35.5", cm: "22.5" },
      { us: "6", uk: "3.5", eu: "36", cm: "23" },
      { us: "6.5", uk: "4", eu: "37", cm: "23.5" },
      { us: "7", uk: "4.5", eu: "37.5", cm: "24" },
      { us: "7.5", uk: "5", eu: "38", cm: "24.5" },
      { us: "8", uk: "5.5", eu: "38.5", cm: "25" },
      { us: "8.5", uk: "6", eu: "39", cm: "25.5" },
      { us: "9", uk: "6.5", eu: "40", cm: "26" },
      { us: "9.5", uk: "7", eu: "40.5", cm: "26.5" },
      { us: "10", uk: "7.5", eu: "41", cm: "27" },
    ],
    men: [
      { us: "7", uk: "6", eu: "40", cm: "25" },
      { us: "7.5", uk: "6.5", eu: "40.5", cm: "25.5" },
      { us: "8", uk: "7", eu: "41", cm: "26" },
      { us: "8.5", uk: "7.5", eu: "42", cm: "26.5" },
      { us: "9", uk: "8", eu: "42.5", cm: "27" },
      { us: "9.5", uk: "8.5", eu: "43", cm: "27.5" },
      { us: "10", uk: "9", eu: "44", cm: "28" },
      { us: "10.5", uk: "9.5", eu: "44.5", cm: "28.5" },
      { us: "11", uk: "10", eu: "45", cm: "29" },
      { us: "11.5", uk: "10.5", eu: "45.5", cm: "29.5" },
      { us: "12", uk: "11", eu: "46", cm: "30" },
    ],
  };

  const measurementTips = [
    {
      title: "Chest/Bust",
      description:
        "Measure around the fullest part of your chest, keeping the tape horizontal.",
    },
    {
      title: "Waist",
      description:
        "Measure around your natural waistline, which is the narrowest part of your torso.",
    },
    {
      title: "Hips",
      description:
        "Measure around the fullest part of your hips, about 8 inches below your waist.",
    },
    {
      title: "Foot Length",
      description:
        "Stand on a piece of paper and mark the longest toe and heel. Measure the distance.",
    },
  ];

  return (
    <div className="min-h-screen">
      <main>
        {/* Breadcrumb */}
        <section className="py-4 border-b">
          <div className="container mx-auto px-4">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <span>/</span>
              <span className="text-foreground">Size Guide</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Size Guide
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Find your perfect fit with our comprehensive size charts and
                measurement guide.
              </p>
            </div>
          </div>
        </section>

        {/* How to Measure */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">How to Measure</h2>
                <p className="text-muted-foreground">
                  Follow these tips for accurate measurements
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {measurementTips.map((tip, index) => (
                  <div
                    key={index}
                    className="bg-background rounded-2xl p-6 shadow-sm border"
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                        <TfiRuler className="h-4 w-4 text-primary" />
                      </div>
                      <h3 className="font-semibold">{tip.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {tip.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <div className="flex items-start">
                  <FiInfo className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">
                      Measurement Tips
                    </h4>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Use a soft measuring tape for best results</li>
                      <li>• Measure over light clothing or undergarments</li>
                      <li>• Keep the tape snug but not tight</li>
                      <li>
                        • Ask someone to help you for more accurate measurements
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Size Charts */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Size Charts</h2>
                <p className="text-muted-foreground">
                  All measurements are in inches
                </p>
              </div>

              <Tabs defaultValue="clothing" className="w-full">
                <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
                  <TabsTrigger value="clothing">Clothing</TabsTrigger>
                  <TabsTrigger value="shoes">Shoes</TabsTrigger>
                </TabsList>

                <TabsContent value="clothing" className="mt-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Women's Clothing */}
                    <div className="bg-background rounded-2xl p-6 shadow-sm border">
                      <h3 className="text-xl font-bold mb-4 text-center">
                        Women's Clothing
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-2">Size</th>
                              <th className="text-left py-2">Chest</th>
                              <th className="text-left py-2">Waist</th>
                              <th className="text-left py-2">Hips</th>
                            </tr>
                          </thead>
                          <tbody>
                            {clothingSizes.women.map((size, index) => (
                              <tr key={index} className="border-b">
                                <td className="py-2 font-medium">
                                  {size.size}
                                </td>
                                <td className="py-2 text-muted-foreground">
                                  {size.chest}
                                </td>
                                <td className="py-2 text-muted-foreground">
                                  {size.waist}
                                </td>
                                <td className="py-2 text-muted-foreground">
                                  {size.hips}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Men's Clothing */}
                    <div className="bg-background rounded-2xl p-6 shadow-sm border">
                      <h3 className="text-xl font-bold mb-4 text-center">
                        Men's Clothing
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-2">Size</th>
                              <th className="text-left py-2">Chest</th>
                              <th className="text-left py-2">Waist</th>
                              <th className="text-left py-2">Hips</th>
                            </tr>
                          </thead>
                          <tbody>
                            {clothingSizes.men.map((size, index) => (
                              <tr key={index} className="border-b">
                                <td className="py-2 font-medium">
                                  {size.size}
                                </td>
                                <td className="py-2 text-muted-foreground">
                                  {size.chest}
                                </td>
                                <td className="py-2 text-muted-foreground">
                                  {size.waist}
                                </td>
                                <td className="py-2 text-muted-foreground">
                                  {size.hips}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="shoes" className="mt-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Women's Shoes */}
                    <div className="bg-background rounded-2xl p-6 shadow-sm border">
                      <h3 className="text-xl font-bold mb-4 text-center">
                        Women's Shoes
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-2">US</th>
                              <th className="text-left py-2">UK</th>
                              <th className="text-left py-2">EU</th>
                              <th className="text-left py-2">CM</th>
                            </tr>
                          </thead>
                          <tbody>
                            {shoeSizes.women.map((size, index) => (
                              <tr key={index} className="border-b">
                                <td className="py-2 font-medium">{size.us}</td>
                                <td className="py-2 text-muted-foreground">
                                  {size.uk}
                                </td>
                                <td className="py-2 text-muted-foreground">
                                  {size.eu}
                                </td>
                                <td className="py-2 text-muted-foreground">
                                  {size.cm}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Men's Shoes */}
                    <div className="bg-background rounded-2xl p-6 shadow-sm border">
                      <h3 className="text-xl font-bold mb-4 text-center">
                        Men's Shoes
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-2">US</th>
                              <th className="text-left py-2">UK</th>
                              <th className="text-left py-2">EU</th>
                              <th className="text-left py-2">CM</th>
                            </tr>
                          </thead>
                          <tbody>
                            {shoeSizes.men.map((size, index) => (
                              <tr key={index} className="border-b">
                                <td className="py-2 font-medium">{size.us}</td>
                                <td className="py-2 text-muted-foreground">
                                  {size.uk}
                                </td>
                                <td className="py-2 text-muted-foreground">
                                  {size.eu}
                                </td>
                                <td className="py-2 text-muted-foreground">
                                  {size.cm}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Fit Guide */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Fit Guide</h2>
                <p className="text-muted-foreground">
                  Understanding different fits and styles
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-background rounded-2xl p-6 shadow-sm border text-center">
                  <h3 className="font-bold mb-3">Slim Fit</h3>
                  <p className="text-muted-foreground text-sm">
                    Close to the body with minimal ease. Best for a tailored,
                    modern look.
                  </p>
                </div>
                <div className="bg-background rounded-2xl p-6 shadow-sm border text-center">
                  <h3 className="font-bold mb-3">Regular Fit</h3>
                  <p className="text-muted-foreground text-sm">
                    Comfortable fit with room to move. Our most popular and
                    versatile fit.
                  </p>
                </div>
                <div className="bg-background rounded-2xl p-6 shadow-sm border text-center">
                  <h3 className="font-bold mb-3">Relaxed Fit</h3>
                  <p className="text-muted-foreground text-sm">
                    Loose and comfortable with extra room. Perfect for casual,
                    laid-back style.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
              <p className="text-muted-foreground mb-8">
                Can't find your size or have questions about fit? Our customer
                service team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Contact Support</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/returns">Return Policy</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
