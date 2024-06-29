import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatePrice } from "@/lib/format";

interface DataCardProps {
    value: number;
    label: string;
    shouldFormate?: boolean;
}

export const DataCard = ({
    value,
    label,
    shouldFormate
}: DataCardProps) => {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    {label}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">
                    {shouldFormate ? formatePrice(value) : value}
                </div>
            </CardContent>
        </Card>
    )
}