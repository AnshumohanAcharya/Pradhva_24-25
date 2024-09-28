import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame } from 'lucide-react';
import Link from "next/link";

const sportsData = [
    { name: 'Athletics', icon: '🏃' },
    { name: 'Cricket', icon: '🏏' },
    { name: 'Football', icon: '⚽' },
    { name: 'Volleyball', icon: '🏐' },
    { name: 'Basketball', icon: '🏀' },
    { name: 'Badminton', icon: '🏸' },
    { name: 'Throw Ball', icon: '🤾‍♀️' },
    { name: 'Indoor Games', icon: '♟️' },
];

const page = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-600 to-orange-600 p-8">
            <div className="max-w-6xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-black mb-4 drop-shadow-lg">Registrations</h1>
                    <p className="text-xl font-bold text-black drop-shadow-md">Choose your sport and unleash your potential!</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {sportsData.map((sport) => (
                        <Card key={sport.name} className="bg-white/10 backdrop-blur-lg border-none hover:shadow-lg transition-all duration-300 group">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold text-black flex items-center justify-between">
                                    {sport.name}
                                    <span className="text-3xl">{sport.icon}</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Link href={`/registrations/${encodeURIComponent(sport.name)}`}>
                                    <Button className="w-full bg-gradient-to-br from-orange-600 to-red-600 border-none hover:shadow-lg transition-shadow duration-300 group-hover:from-red-600 group-hover:to-orange-600">
                                        Register Now
                                        <Flame className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default page;