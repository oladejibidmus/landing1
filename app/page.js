"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Globe2, Building2, Users2, Library,
  Check, ArrowRight 
} from "lucide-react";

const LandingPage = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    error: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitted: false, submitting: true, error: null });

    try {
      const response = await fetch("https://formspree.io/f/xpwzjbaj", {
        method: 'POST',
        body: new FormData(e.target),
        headers: {
          Accept: 'application/json'
        }
      });

      if (response.ok) {
        setStatus({
          submitted: true,
          submitting: false,
          error: null
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        error: 'Failed to submit. Please try again later.'
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed w-full z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="pl-4 flex items-center gap-2">
            <Globe2 className="h-6 w-6 text-primary relative" />
            <span className="font-bold text-xl tracking-tight">Diasporan</span>
          </div>
          <Button 
            onClick={() => document.getElementById("signup").scrollIntoView({ behavior: "smooth" })}
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 rounded-md"
          >
            Join Waitlist
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-background via-background to-muted/30 pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/5 animate-gradient" />
        </div>
        <div className="container max-w-6xl mx-auto px-4 py-12 md:py-20 relative">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4 shadow-sm">
              Join our growing community
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 leading-tight">
              A Platform Built for Immigrants—Helping You Find Jobs, Resources, and Support in the UK
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Your bridge to opportunities and community in your new home
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Button 
                size="lg"
                onClick={() => document.getElementById("signup").scrollIntoView({ behavior: "smooth" })}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 rounded-md"
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="bg-muted/50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:20px_20px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        </div>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent shadow-sm" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent shadow-sm" />
        <div className="container max-w-6xl mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                The Challenges We&apos;re Solving
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Moving to a new country is challenging enough. Finding the right opportunities 
                and support shouldn&apos;t add to that stress.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  icon: <Building2 className="h-8 w-8 text-primary" />,
                  title: "Job Search Struggles",
                  description: "Difficulty finding employers who value international experience and understand visa requirements."
                },
                {
                  icon: <Library className="h-8 w-8 text-primary" />,
                  title: "Resource Navigation",
                  description: "Overwhelming amount of information with no clear guidance on what applies to your situation."
                },
                {
                  icon: <Users2 className="h-8 w-8 text-primary" />,
                  title: "Community Connection",
                  description: "Feeling isolated and struggling to build a professional network in a new country."
                },
                {
                  icon: <Globe2 className="h-8 w-8 text-primary" />,
                  title: "Cultural Integration",
                  description: "Adapting to workplace culture and professional norms in the UK."
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="relative group rounded-xl border p-6 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-primary/30"
                >
                  <div className="relative">
                    <div className="mb-4 relative">
                      <div className="transition-colors duration-300">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary/90 transition-colors duration-300">{item.title}</h3>
                    <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution/Value Proposition */}
      <section id="features" className="bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-primary/5 to-transparent" />
          <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px]" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent shadow-sm" />
        <div className="container max-w-6xl mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                Our Solution
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We&apos;re building a platform that brings together everything you need to succeed in the UK—all in one place.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Connect with job opportunities from employers who value your international experience",
                "Access verified resources and step-by-step guides for settling in the UK",
                "Join a community of people who understand and support your journey",
                "Get personalized recommendations based on your needs and goals"
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 rounded-xl border bg-card transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-primary/30 group"
                >
                  <div className="rounded-full p-2 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-lg pt-1 group-hover:text-foreground/90 transition-colors duration-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sign-up Form */}
      <section id="signup" className="bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:20px_20px] [mask-image:radial-gradient(black,transparent_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/5" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent shadow-sm" />
        <div className="container max-w-6xl mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-xl mx-auto">
            <Card className="p-8 shadow-xl border-primary/10 relative overflow-hidden backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
              <div className="relative space-y-6">
                <div className="text-center space-y-4">
                  <h2 className="text-2xl font-bold">Join Our Waitlist</h2>
                  <p className="text-muted-foreground">
                    Be among the first to access our platform and help shape its development.
                  </p>
                </div>

                {status.submitted ? (
                  <Alert className="bg-green-50 border-green-200">
                    <AlertDescription className="text-green-800">
                      Thank you for joining our waitlist! We&apos;ll keep you updated on our progress 
                      and let you know when we&apos;re ready to launch.
                    </AlertDescription>
                  </Alert>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2" htmlFor="name">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          type="text"
                          name="name"
                          placeholder="Enter your full name"
                          required
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2" htmlFor="email">
                          Your Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          name="email"
                          placeholder="Enter your email address"
                          required
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2" htmlFor="message">
                          Message (Optional)
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your experience as an immigrant in the UK"
                          className="w-full"
                          rows={4}
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="feedback"
                          name="wants_feedback"
                        />
                        <label
                          htmlFor="feedback"
                          className="text-sm text-muted-foreground"
                        >
                          I&apos;m interested in providing feedback to help shape the platform
                        </label>
                      </div>
                    </div>

                    {status.error && (
                      <Alert variant="destructive">
                        <AlertDescription>{status.error}</AlertDescription>
                      </Alert>
                    )}

                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={status.submitting}
                    >
                      {status.submitting ? "Submitting..." : "Join the Waitlist"}
                    </Button>
                  </form>
                )}
              </div>
            </Card>

            <div className="mt-6 text-center">
              <p className="text-muted-foreground">
                Be part of something new and exciting. Help us shape the future of this platform 
                and create a better experience for immigrants in the UK.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent shadow-sm" />
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-3">
              <div className="relative pl-4 flex items-center gap-2">
                <Globe2 className="h-5 w-5 text-primary relative" />
                <span className="font-bold">Diasporan</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              2024 Diasporan. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;