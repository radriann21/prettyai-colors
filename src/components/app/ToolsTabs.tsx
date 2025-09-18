"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AIGeneration } from "./AIGeneration";
import { ManualGeneration } from "./ManualGeneration";
import { RandomGeneration } from "./RandomGeneration";
import { AnimatePresence } from "motion/react";

export const ToolsTabs = () => {
  return (
    <Tabs defaultValue="manual">
      <TabsList>
        <TabsTrigger value="manual">Manual</TabsTrigger>
        <TabsTrigger value="ai">AI</TabsTrigger>
        <TabsTrigger value="random">Random</TabsTrigger>
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
