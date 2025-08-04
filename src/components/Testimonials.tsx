import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Raymond P.",
      review: "verified buyer",
      rating: 5,
      text: "I've been using HostSailor for over a year now. The performance is rock solid, and what I love most is the clear, no-surprise pricing. You get exactly what you pay for."
    },
    {
      name: "Neilson J.",
      review: "verified buyer", 
      rating: 5,
      text: "The server is really impressive. My site loads faster, and the Linux setup was super easy. I even added Windows later without any hassle. Highly recommended!"
    },
    {
      name: "Jack Roach",
      review: "verified buyer",
      rating: 5,
      text: "HostSailor's support team is responsive and professional. My KVM VPS runs smoothly, and I've experienced zero downtime since switching."
    }
  ];

  return (
    <section className="py-20 bg-accent/10">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Millions
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our customers have to say about their HostSailor experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {testimonial.text}
                </p>
                
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.review}</div>
                  </div>
                  <div className="ml-auto">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">G</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <div className="w-2 h-2 bg-muted rounded-full"></div>
          <div className="w-2 h-2 bg-muted rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;