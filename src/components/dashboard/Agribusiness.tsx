import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const soilData = [
  { time: '6:00', moisture: 45, ph: 6.8, temperature: 22 },
  { time: '9:00', moisture: 42, ph: 6.9, temperature: 24 },
  { time: '12:00', moisture: 38, ph: 7.0, temperature: 26 },
  { time: '15:00', moisture: 40, ph: 6.9, temperature: 25 },
  { time: '18:00', moisture: 43, ph: 6.8, temperature: 23 },
];

const products = [
  { id: 1, name: 'Organic Maize', quantity: '500 kg', price: 'KES 25,000', seller: 'John Farmer' },
  { id: 2, name: 'Fresh Vegetables', quantity: '200 kg', price: 'KES 15,000', seller: 'Mary Gardens' },
  { id: 3, name: 'Coffee Beans', quantity: '300 kg', price: 'KES 45,000', seller: 'Coffee Co-op' },
];

export function Agribusiness() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Agribusiness</h1>
        <p className="text-muted-foreground">
          Monitor soil health, track produce, and connect with buyers
        </p>
      </div>

      <Tabs defaultValue="iot" className="space-y-4">
        <TabsList>
          <TabsTrigger value="iot">IoT Data</TabsTrigger>
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
        </TabsList>

        <TabsContent value="iot" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Soil Moisture</CardTitle>
                <CardDescription>Current reading: 43%</CardDescription>
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
                <CardDescription>Current reading: 6.8</CardDescription>
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
                <CardTitle>Soil Temperature</CardTitle>
                <CardDescription>Current reading: 23°C</CardDescription>
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
          </div>
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
                    className="flex items-center justify-between rounded-lg border p-4"
                  >
                    <div>
                      <h3 className="font-medium">{product.name}</h3>
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