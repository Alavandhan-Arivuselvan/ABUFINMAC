"use client"

import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"

interface SandboxDemoProps {
  title: string
  description?: string
  code: string
  children: React.ReactNode
}

export default function SandboxDemo({ title, description, code, children }: SandboxDemoProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-muted/50">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{title}</CardTitle>
          <Tabs defaultValue="preview">
            <TabsList className="grid w-[200px] grid-cols-2">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="preview" className="mt-2">
              <CardContent className="p-6">{children}</CardContent>
            </TabsContent>
            <TabsContent value="code" className="mt-2">
              <div className="border-t">
                <CodeBlock code={code} />
              </div>
            </TabsContent>
          </Tabs>
        </div>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </CardHeader>
    </Card>
  )
}
