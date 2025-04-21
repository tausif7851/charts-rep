// app/dashboard/page.tsx or wherever your layout component goes

import { Card, CardContent } from "@/components/ui/card";
import BarApex from "./BarApex";
import ScatterApex from "./ScatterApex";
import PieApex from "./PieApex";
import MultiTypeChart from "./MixApex";
import HeatChart from "./HeatApex";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ApexPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6 flex justify-between">
        Dashboard{" "}
        <Button>
          <Link href="/shad">Go Shad</Link>
        </Button>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Card className="">
          <CardContent className="h-full flex items-center justify-center">
            {/* Replace with your Chart component */}
            <BarApex />
          </CardContent>
        </Card>

        <Card className="">
          <CardContent className="h-full flex items-center justify-center">
            <ScatterApex />
          </CardContent>
        </Card>

        <Card className="">
          <CardContent className="h-full flex items-center justify-center">
            <PieApex />
          </CardContent>
        </Card>

        <Card className=" ">
          <CardContent className="h-full flex items-center justify-center">
            <MultiTypeChart />
          </CardContent>
        </Card>
      </div>
      <Card className="">
        <CardContent className="h-full flex items-center justify-center">
          <HeatChart />
        </CardContent>
      </Card>
    </div>
  );
}
