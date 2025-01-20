import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Button } from "@/components/ui/button";
import { Plus, Filter } from "lucide-react";

const soilData = [
  { time: '6:00', moisture: 45, ph: 6.8, temperature: 22, pests: 2 },
  { time: '9:00', moisture: 42, ph: 6.9, temperature: 24, pests: 3 },
  { time: '12:00', moisture: 38, ph: 7.0, temperature: 26, pests: 5 },
  { time: '15:00', moisture: 40, ph: 6.9, temperature: 25, pests: 4 },
  { time: '18:00', moisture: 43, ph: 6.8, temperature: 23, pests: 2 },
];

const supplyChainData = [
  { stage: 'Harvested', value: 100, status: 'completed' },
  { stage: 'Processed', value: 80, status: 'completed' },
  { stage: 'Packaged', value: 60, status: 'in-progress' },
  { stage: 'Distributed', value: 30, status: 'pending' },
  { stage: 'Delivered', value: 0, status: 'pending' },
];

const products = [
  { id: 1, name: 'Organic Maize', quantity: '500 kg', price: 'KES 25,000', seller: 'John Farmer', verified: true },
  { id: 2, name: 'Fresh Vegetables', quantity: '200 kg', price: 'KES 15,000', seller: 'Mary Gardens', verified: true },
  { id: 3, name: 'Coffee Beans', quantity: '300 kg', price: 'KES 45,000', seller: 'Coffee Co-op', verified: false },
];

export function Agribusiness() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Agribusiness</h1>
          <p className="text-muted-foreground">
            Monitor soil health, track produce, and connect with buyers
          </p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Add Listing
          </Button>
        </div>
      </div>

      <Tabs defaultValue="iot" className="space-y-4">
        <TabsList>
          <TabsTrigger value="iot">IoT Data</TabsTrigger>
          <TabsTrigger value="supply">Supply Chain</TabsTrigger>
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
        </TabsList>

        <TabsContent value="iot" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle>Soil Moisture</CardTitle>
                <CardDescription>Current: 43%</CardDescription>
              </CardHeader>
              <CardContent className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={soilData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="moisture" stroke="#2D5A27" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Soil pH</CardTitle>
                <CardDescription>Current: 6.8</CardDescription>
              </CardHeader>
              <CardContent className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={soilData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="ph" stroke="#1B4965" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Temperature</CardTitle>
                <CardDescription>Current: 23°C</CardDescription>
              </CardHeader>
              <CardContent className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={soilData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="temperature" stroke="#4A7856" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pest Activity</CardTitle>
                <CardDescription>Current: Low Risk</CardDescription>
              </CardHeader>
              <CardContent className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={soilData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="pests" stroke="#F97316" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="supply" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Supply Chain Progress</CardTitle>
              <CardDescription>Track your products from farm to market</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={supplyChainData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="stage" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#2D5A27" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="marketplace">
          <Card>
            <CardHeader>
              <CardTitle>Available Products</CardTitle>
              <CardDescription>Connect with local farmers and buy produce</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between rounded-lg border p-4 hover:bg-accent transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{product.name}</h3>
                        {product.verified && (
                          <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700">
                            Verified
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">Seller: {product.seller}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{product.price}</p>
                      <p className="text-sm text-muted-foreground">{product.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}