import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Gift,
  Heart,
  Check,
  Mail,
  Smartphone,
  CreditCard,
  Snowflake,
  Trophy,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const giftCardDesigns = [
  {
    id: 1,
    name: "Birthday Celebration",
    icon: Gift,
    color: "bg-pink-500",
    category: "Birthday",
    popular: true,
  },
  {
    id: 2,
    name: "Holiday Wishes",
    icon: Snowflake,
    color: "bg-blue-500",
    category: "Holiday",
    popular: false,
  },
  {
    id: 3,
    name: "Thank You",
    icon: Heart,
    color: "bg-red-500",
    category: "Appreciation",
    popular: true,
  },
  {
    id: 4,
    name: "Congratulations",
    icon: Trophy,
    color: "bg-yellow-500",
    category: "Achievement",
    popular: false,
  },
  {
    id: 5,
    name: "Love & Romance",
    icon: Heart,
    color: "bg-rose-500",
    category: "Romance",
    popular: true,
  },
  {
    id: 6,
    name: "Just Because",
    icon: Sparkles,
    color: "bg-purple-500",
    category: "General",
    popular: false,
  },
];

const giftCardAmounts = [25, 50, 100, 150, 200, 250];

export default function GiftCardsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Gift className="w-8 h-8 mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold">Gift Cards</h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            The perfect gift for any occasion
          </p>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            Digital Delivery • No Expiration Date
          </Badge>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="container mx-auto px-4 py-4">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li>
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-900 font-medium">Gift Cards</li>
        </ol>
      </nav>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Mail className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-lg font-semibold mb-2">Instant Delivery</h3>
            <p className="text-gray-600">
              Delivered via email within minutes of purchase
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Heart className="w-12 h-12 mx-auto mb-4 text-red-600" />
            <h3 className="text-lg font-semibold mb-2">Perfect for Anyone</h3>
            <p className="text-gray-600">
              Let them choose exactly what they want
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Check className="w-12 h-12 mx-auto mb-4 text-green-600" />
            <h3 className="text-lg font-semibold mb-2">Never Expires</h3>
            <p className="text-gray-600">No expiration date or hidden fees</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Gift Card Designs */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Choose a Design</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {giftCardDesigns.map((design) => (
                <Card
                  key={design.id}
                  className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-500 hover:scale-105"
                >
                  <CardContent className="p-0">
                    <div
                      className={`relative ${design.color} h-32 flex items-center justify-center rounded-t-lg`}
                    >
                      <design.icon className="w-12 h-12 text-white" />
                      {design.popular && (
                        <Badge className="absolute top-2 right-2 bg-orange-500 text-white">
                          Popular
                        </Badge>
                      )}
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-semibold text-sm mb-1">
                        {design.name}
                      </h3>
                      <p className="text-xs text-gray-600">{design.category}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Gift Card Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gift className="w-5 h-5 mr-2" />
                  Customize Your Gift Card
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Amount Selection */}
                <div>
                  <label className="block text-sm font-medium mb-3">
                    Select Amount
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {giftCardAmounts.map((amount) => (
                      <Button
                        key={amount}
                        variant="outline"
                        className="h-12 text-lg font-semibold hover:bg-blue-50 hover:border-blue-500"
                      >
                        ${amount}
                      </Button>
                    ))}
                  </div>
                  <div className="mt-3">
                    <Input
                      type="number"
                      placeholder="Custom amount ($10 - $500)"
                      className="text-center text-lg"
                    />
                  </div>
                </div>

                {/* Recipient Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Recipient Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="Recipient's Name" />
                    <Input type="email" placeholder="Recipient's Email" />
                  </div>
                </div>

                {/* Personal Message */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Personal Message (Optional)
                  </label>
                  <Textarea
                    placeholder="Write a personal message..."
                    className="min-h-[100px]"
                    maxLength={200}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    200 characters maximum
                  </p>
                </div>

                {/* Sender Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Your Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="Your Name" />
                    <Input type="email" placeholder="Your Email" />
                  </div>
                </div>

                {/* Delivery Options */}
                <div>
                  <label className="block text-sm font-medium mb-3">
                    Delivery Method
                  </label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="email"
                        name="delivery"
                        className="w-4 h-4"
                        defaultChecked
                      />
                      <Mail className="w-4 h-4 text-gray-600" />
                      <label htmlFor="email" className="text-sm">
                        Email Delivery (Instant)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="schedule"
                        name="delivery"
                        className="w-4 h-4"
                      />
                      <Smartphone className="w-4 h-4 text-gray-600" />
                      <label htmlFor="schedule" className="text-sm">
                        Schedule for Later
                      </label>
                    </div>
                  </div>
                </div>

                {/* Schedule Date (if selected) */}
                <div className="hidden">
                  <Input type="datetime-local" className="w-full" />
                </div>

                {/* Order Summary */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Order Summary</h3>
                  <div className="flex justify-between items-center mb-2">
                    <span>Gift Card Value:</span>
                    <span className="font-semibold">$100.00</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span>Processing Fee:</span>
                    <span>$0.00</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between items-center font-bold text-lg">
                    <span>Total:</span>
                    <span>$100.00</span>
                  </div>
                </div>

                {/* Purchase Button */}
                <Button className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Purchase Gift Card
                </Button>

                {/* Security Notice */}
                <div className="text-xs text-gray-600 text-center">
                  <p>🔒 Secure checkout powered by SSL encryption</p>
                  <p>Gift cards are delivered digitally and never expire</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">
                  How do I redeem a gift card?
                </h3>
                <p className="text-sm text-gray-600">
                  Enter your gift card code at checkout. The balance will be
                  applied to your order total.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Do gift cards expire?</h3>
                <p className="text-sm text-gray-600">
                  No, our gift cards never expire and have no hidden fees or
                  charges.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">
                  Can I check my gift card balance?
                </h3>
                <p className="text-sm text-gray-600">
                  Yes, you can check your balance anytime on our gift card
                  balance page.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">
                  Can I use multiple gift cards?
                </h3>
                <p className="text-sm text-gray-600">
                  Yes, you can apply multiple gift cards to a single order
                  during checkout.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
