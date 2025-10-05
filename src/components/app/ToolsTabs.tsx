"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AIGeneration } from "./AIGeneration";
import { ManualGeneration } from "./ManualGeneration";
import { RandomGeneration } from "./RandomGeneration";
import { AnimatePresence } from "motion/react";

export const ToolsTabs = () => {
  return (
    <Tabs defaultValue="manual">
      <TabsList className="w-full">
        <TabsTrigger value="manual" className="p-2 cursor-pointer">Manual</TabsTrigger>
        <TabsTrigger value="ai" className="p-2 cursor-pointer">AI</TabsTrigger>
        <TabsTrigger value="random" className="p-2 cursor-pointer">Random</TabsTrigger>
      </TabsList>
      <AnimatePresence>
        <TabsContent value="manual">
          <ManualGeneration />
        </TabsContent>
        <TabsContent value="ai">
          <AIGeneration />
        </TabsContent>
        <TabsContent value="random">
          <RandomGeneration />
        </TabsContent>
      </AnimatePresence>
    </Tabs>
  );
};
