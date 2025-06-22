import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function projects() {
    return (
        <div className="flex space-y-5 p-8 flex-col ">
            <h2 className="text-2xl pb-8">Projects</h2>
            <Card>
                <CardHeader>
                    <CardTitle>KanoonTalks &#40;2025&#41; </CardTitle>
                    <CardDescription>
                        A dynamic legal platform where students, professionals, and researchers can publish articles, papers, and case laws — promoting legal awareness, academic collaboration, and access to valuable legal content and updates.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        <li>Publish and explore legal articles and case laws.</li>
                        <li>Collaborate with law students and professionals.</li>
                        <li>Stay updated with recent legal developments.</li>
                    </ul>
                </CardContent>

                <CardAction>
                    <Button variant="link" asChild>
                        <a href="https://kanoon-talks.vercel.app/" target="_blank" rel="noopener noreferrer">
                            Live Site
                        </a>
                    </Button>

                    <Button variant="link" asChild>
                        <a href="https://github.com/KshitijSingh07/KanoonTalks" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    </Button>
                </CardAction>

                <CardFooter className="text-xs text-gray-500">
                    Tech Stack: Next.js • MongoDB • Tailwind CSS • Node.js
                </CardFooter>
            </Card>


            <Card>
                <CardHeader>
                    <CardTitle>Portfolio Website (2025) – Developer Showcase</CardTitle>
                    <CardDescription>
                        A personal portfolio site to highlight my resume, projects, skills, and contact info with a modern UI and responsive design.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        <li>Built with Next.js App Router and Tailwind CSS for optimal performance</li>
                        <li>Responsive UI with light/dark theme toggle using shadcn/ui</li>
                        <li>Resume embedded as PDF viewer with download functionality</li>
                        <li>Modular component architecture for scalability and maintainability</li>
                        <li>Deployed on Vercel </li>
                    </ul>
                </CardContent>

                <CardAction className="flex gap-4">
                    <Button variant="link" asChild>
                        <a
                            href="https://portfolio-kj07.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Live Site
                        </a>
                    </Button>
                    <Button variant="link" asChild>
                        <a
                            href="https://github.com/KshitijSingh07/portfolio"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </Button>
                </CardAction>

                <CardFooter className="text-xs text-gray-500">
                    Tech Stack: Next.js • Tailwind CSS • shadcn/ui • Vercel
                </CardFooter>
            </Card>


            <Card>
                <CardHeader>
                    <CardTitle>Wanderlust &#40;2024&#41; – Property Listings Web App</CardTitle>
                    <CardDescription>
                        A full-stack real estate platform where users can list, search, and manage properties with authentication and secure CRUD features.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        <li>Built using MongoDB, Express.js, and Node.js with EJS templating</li>
                        <li>User authentication with login/register and session-based access</li>
                        <li>Searchable and filterable property listings with CRUD functionality</li>
                        <li>Responsive layout with mobile-friendly UI</li>
                        <li>Deployed on Render for live production access</li>
                    </ul>
                </CardContent>

                <CardAction className="flex gap-4">
                    <Button variant="link" asChild>
                        <a
                            href="https://wanderlust-99v7.onrender.com/listings"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Live Site
                        </a>
                    </Button>
                    <Button variant="link" asChild>
                        <a
                            href="https://github.com/KshitijSingh07/Wanderlust"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </Button>
                </CardAction>

                <CardFooter className="text-xs text-gray-500">
                    Tech Stack: MongoDB • Express.js • Node.js • EJS
                </CardFooter>
            </Card>




        </div>
    )
}