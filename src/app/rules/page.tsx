const Page = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-600 to-orange-600 p-8 text-black">
            <div className="max-w-4xl mx-auto bg-white bg-opacity-10 p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-extrabold text-center mb-8 drop-shadow-lg">PRADHVA 2024</h1>
                <h2 className="text-2xl font-semibold mb-4 underline">Rules and Regulations:</h2>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Group Games:</h3>
                    <ul className="list-disc list-inside">
                        <li>The group games include <strong>Cricket</strong>, <strong>Football</strong>, <strong>Volleyball</strong>, <strong>Basketball</strong>, and <strong>Throwball</strong>.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Athletics:</h3>
                    <ul className="list-disc list-inside">
                        <li>The athletic events for boys include <strong>100m</strong>, <strong>200m</strong>, <strong>400m</strong>, <strong>800m</strong>, and <strong>1500m</strong> races.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Field Events:</h3>
                    <ul className="list-disc list-inside">
                        <li>Events include <strong>Shotput</strong>, <strong>Discus Throw</strong>, <strong>Javelin</strong>, and <strong>Long Jump</strong>.</li>
                        <li>Results are based on the best of three attempts. <strong>Foul attempts</strong> count as chances.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Badminton:</h3>
                    <ul className="list-disc list-inside">
                        <li>Matches up to the <strong>quarterfinals</strong>: 1 set of 15 points.</li>
                        <li><strong>Quarterfinals onward</strong>: Best of 3 sets.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Indoor Events:</h3>
                    <ul className="list-disc list-inside">
                        <li>Events include <strong>Carroms</strong>, <strong>Chess</strong>, and <strong>Table Tennis</strong>.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Relay Races:</h3>
                    <ul className="list-disc list-inside">
                        <li>Relay races include <strong>4x100m</strong> and <strong>4x400m</strong>.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h3 className="text-2xl font-semibold mb-2">Participation Guidelines:</h3>
                    <ul className="list-disc list-inside">
                        <li>Each student can participate in the following events:
                            <ul className="list-decimal list-inside ml-4">
                                <li><strong>2 group games</strong></li>
                                <li><strong>2 indoor events</strong></li>
                                <li><strong>2 athletics events</strong></li>
                                <li><strong>2 field events</strong></li>
                                <li><strong>1 relay event</strong></li>
                                <li><strong>Badminton</strong> (separate from other events)</li>
                            </ul>
                        </li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Registration and Attendance:</h3>
                    <ul className="list-disc list-inside">
                        <li><strong>No spot registrations</strong> will be permitted.</li>
                        <li>Participants must arrive on time. Late arrivals (except for event clashes) result in disqualification.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Team Formation:</h3>
                    <ul className="list-disc list-inside">
                        <li>Teams must consist of members from the same year/batch.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Code of Conduct:</h3>
                    <ul className="list-disc list-inside">
                        <li><strong>Decisions</strong> by referees and the committee are final. Arguing leads to warnings or disqualification.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Use of Equipment:</h3>
                    <ul className="list-disc list-inside">
                        <li><strong>Misuse</strong> or tampering with sports equipment results in penalties or disqualification.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Health and Safety:</h3>
                    <ul className="list-disc list-inside">
                        <li>The organizing committee is not liable for injuries, though <strong>first aid</strong> will be available.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Forfeiture:</h3>
                    <ul className="list-disc list-inside">
                        <li>Teams must notify the committee at least <strong>1 hour before</strong> the event if they are unable to compete.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Tiebreakers:</h3>
                    <ul className="list-disc list-inside">
                        <li>In case of a <strong>tie</strong>, event-specific tiebreaker rules apply (e.g., additional set, time extension).</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default Page;
