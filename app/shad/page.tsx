import LineShad from "./LineShad";
import BarShad from "./BarShad";
import PieShad from "./PieShad";
import RadarShad from "./RadarShad";
import AreaShad from "./AreaShad";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6 flex justify-between">
        Dashboard{" "}
        <Button>
          <Link href="/apex">Go Apex</Link>
        </Button>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Card className="">
          <CardContent className="h-full flex items-center justify-center">
            <LineShad />
          </CardContent>
        </Card>

        <Card className="">
          <CardContent className="h-full flex items-center justify-center">
            <BarShad />
          </CardContent>
        </Card>

        <Card className="">
          <CardContent className="h-full flex items-center justify-center">
            <PieShad />
          </CardContent>
        </Card>

        <Card className="">
          <CardContent className="h-full flex items-center justify-center">
            <RadarShad />
          </CardContent>
        </Card>
      </div>
      <Card className="">
        <CardContent className="h-full flex items-center justify-center">
          <AreaShad />
        </CardContent>
      </Card>
    </div>
  );
}
