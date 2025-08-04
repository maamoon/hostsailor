import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      content: "HostSailor has been incredible for my online store. The speed and reliability are exactly what I needed.",
      avatar: "SJ"
    },
    {
      name: "Mike Chen",
      role: "Web Developer",
      content: "As a developer, I appreciate the technical features and excellent customer support. Highly recommended!",
      avatar: "MC"
    },
    {
      name: "Emma Davis",
      role: "Blogger",
      content: "Moving to HostSailor was the best decision for my blog. The performance improvement was immediate.",
      avatar: "ED"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of satisfied customers worldwide
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};