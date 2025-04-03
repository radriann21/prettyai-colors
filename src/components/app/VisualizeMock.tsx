"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Loader, Menu } from "lucide-react";
import { calculateContrast } from "@/utils/calculateContrast";

export const VisualizeMock = ({ colors }: { colors: string[] }) => {
  return (
    <Tabs defaultValue="cards" className="w-full">
      <TabsList>
        <TabsTrigger
          value="cards"
          className="cursor-pointer transition-all duration-200 hover:shadow-sm"
        >
          Cards
        </TabsTrigger>
        <TabsTrigger
          value="buttons"
          className="cursor-pointer transition-all duration-200 hover:shadow-sm"
        >
          Buttons
        </TabsTrigger>
        <TabsTrigger
          value="web"
          className="cursor-pointer transition-all duration-200 hover:shadow-sm"
        >
          Web
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="cards"
        className="w-full flex flex-col lg:flex-row gap-2 items-center justify-between"
      >
        <Card className="w-full h-full shadow-md" style={{ backgroundColor: colors[0], color: colors[1] }}>
          <CardHeader>
            <CardTitle style={{ color: colors[1] }} className="font-bold">
              How this works?
            </CardTitle>
            <CardDescription style={{ color: colors[2] }}>
              Using differents algorithms, we can generate colors following
              certain rules.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="leading-6 text-sm">
              Colors are assigned to provide adequate contrast while remaining
              aesthetically pleasing. 
            </p>
          </CardContent>
        </Card>
        <Card className="w-full h-full shadow-md" style={{ backgroundColor: colors[0], color: colors[1] }}>
          <CardHeader>
            <CardTitle style={{ color: colors[1] }} className="font-bold">
              How to use?
            </CardTitle>
            <CardDescription style={{ color: colors[2] }}>
              There are three ways to generate colors.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col space-y-1 text-sm">
              <li>
                <span className="font-bold">User input:</span> User enters a
                base color and the palette is generated from that color.
              </li>
              <li>
                <span className="font-bold">Random generation:</span> A random
                palette of colors is generated.
              </li>
              <li>
                <span className="font-bold">AI generation:</span> A palette of
                colors is generated based on a user prompt.
              </li>
            </ul>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent
        value="buttons"
        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <Button
          className="cursor-pointer"
          style={{ backgroundColor: colors[3], color: calculateContrast(colors[3]) }}
        >
          Normal
        </Button>
        <Button
          className="cursor-pointer"
          variant="outline"
          style={{ borderColor: colors[1] }}
        >
          Outline
        </Button>
        <Button
          className="cursor-pointer"
          disabled
          style={{ backgroundColor: colors[3], color: calculateContrast(colors[3]) }}
        >
          Disabled
        </Button>
        <Button
          className="cursor-pointer flex items-center text-neutral-900"
          style={{ backgroundColor: colors[4], color: calculateContrast(colors[4]) }}
        >
          Loading...
          <Loader
            className="h-4 w-4 animate-spin"
          />
        </Button>
        <Button className="cursor-pointer flex items-center" style={{ backgroundColor: colors[5], color: calculateContrast(colors[5]) }}>
          Sign In
          <Mail className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          className="cursor-pointer"
          style={{ color: calculateContrast(colors[1]) }}
        >
          Ghost
        </Button>
      </TabsContent>
      <TabsContent value="web" className="w-full">
        <div className="flex flex-col min-h-[400px]">
          <nav
            className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4"
            style={{ backgroundColor: colors[3], color: calculateContrast(colors[3]) }}
          >
            <h1 className="font-bold text-lg">PrettyAI Colors</h1>

            <div className="sm:hidden">
              <Menu className="h-6 w-6 cursor-pointer" />
            </div>

            <div className="hidden sm:flex items-center space-x-4">
              <a
                href="#"
                className="hover:underline text-sm transition-all duration-200 cursor-pointer sm:text-base"
              >
                Home
              </a>
              <a
                href="#"
                className="hover:underline text-sm transition-all duration-200 cursor-pointer sm:text-base"
              >
                Features
              </a>
              <a
                href="#"
                className="hover:underline text-sm transition-all duration-200 cursor-pointer sm:text-base"
              >
                Pricing
              </a>
              <Button
                variant="outline"
                className="text-sm cursor-pointer sm:text-base"
                style={{
                  borderColor: colors[4],
                  color: colors[1],
                }}
              >
                Sign In
              </Button>
            </div>
          </nav>

          <section
            className="flex flex-col items-center justify-center flex-1 px-4 py-8 sm:px-6 sm:py-12 text-center"
            style={{ backgroundColor: colors[0], color: colors[1] }}
          >
            <h1
              className="text-2xl font-bold mb-4 sm:text-4xl"
              style={{ color: colors[1] }}
            >
              Create Stunning Designs
            </h1>
            <p className="text-sm mb-6 sm:text-lg">
              Use our AI-powered color generator to create beautiful and
              accessible palettes for your projects.
            </p>
            <Button
              className="px-4 py-2 text-sm font-semibold sm:px-6 sm:py-3 cursor-pointer"
              style={{
                backgroundColor: colors[4],
                color: calculateContrast(colors[5]),
              }}
            >
              Get Started
            </Button>
          </section>
        </div>
      </TabsContent>
    </Tabs>
  );
};
