import { Heart, Target, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4">
            About <span className="text-primary">Legacy Wear</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Where style meets confidence. We're more than just a fashion brand - we're a lifestyle.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-slide-up">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Legacy Wear was founded with a simple vision: to empower individuals through exceptional fashion. 
              What started as a passion project has grown into a beloved brand trusted by fashion enthusiasts worldwide.
            </p>
            <p className="text-muted-foreground mb-4">
              We believe that what you wear is an expression of who you are. That's why we curate only the finest 
              pieces that combine style, quality, and comfort - helping you create your own legacy, one outfit at a time.
            </p>
            <p className="text-muted-foreground">
              Today, we're proud to serve thousands of customers who share our passion for timeless elegance 
              and contemporary fashion.
            </p>
          </div>
          <div className="relative h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg animate-fade-in" />
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-card rounded-lg border border-border animate-fade-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality First</h3>
              <p className="text-muted-foreground">
                Every piece is carefully selected for its superior craftsmanship
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border border-border animate-fade-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Style Forward</h3>
              <p className="text-muted-foreground">
                We stay ahead of trends while honoring timeless classics
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border border-border animate-fade-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
              <p className="text-muted-foreground">
                Your satisfaction and confidence are our top priorities
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border border-border animate-fade-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for perfection in everything we do
              </p>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-gradient-to-r from-primary/20 to-primary/5 rounded-lg p-12 text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            To inspire confidence and self-expression through exceptional fashion. 
            We're committed to providing a curated selection of premium clothing, shoes, bags, 
            and accessories that help you look and feel your absolute best.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
