import styles from '@/styles/Home.module.scss';
import Head from 'next/head';
import { Header } from '@/comps/Header';
import Link from 'next/link';
import { Button } from '@/comps/Button';
import { Hero } from '@/comps/Hero';
import { client } from '@/utils/supa';
import { Project } from '@/db/project.def';
import { CardList } from '@/comps/CardList';
import { ProjectCard } from '@/comps/ProjectCard';
import { Blog } from '@/db/blog.def';
import { BlogCard } from '@/comps/BlogCard';
import { SubscribeCta } from '@/comps/SubscribeCta';
import { Footer } from '@/comps/Footer';
import { VoidHeader } from '@/comps/VoidHeader';
import { useRouter } from 'next/router';

function Home({ projects, blogs }: { projects: Project[]; blogs: Blog[] }) {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>void - home</title>
                <meta
                    name="description"
                    content="Filling the void, one line of code at a time. Passionate Developer | Driven by Innovation and Endless Curiosity."
                />
            </Head>
            <main>
                {/* Header */}
                <VoidHeader />

                {/* Hero Section */}
                <Hero>
                    <h1>
                        Filling the <span id="accent">void</span>, one line of
                        code at a time.
                    </h1>
                    <p>
                        Passionate Developer | Driven by Innovation and Endless
                        Curiosity.
                    </p>
                    <Button onClick={() => router.push('/about#connect')}>
                        Let's Connect
                    </Button>
                </Hero>

                {/* List of 6 projects I'm working on */}
                <CardList heading="Latest Projects" read_more="/">
                    {projects.map((project: Project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </CardList>

                {/* List of 6 blogs I'm working on */}
                <CardList heading="Latest Blog Posts" read_more="/">
                    {blogs.map((blog: Blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </CardList>

                {/* Call to action */}
                <SubscribeCta />

                {/* Footer */}
                <Footer />
            </main>
        </>
    );
}

export async function getStaticProps() {
    const projects = await client
        .from('Project')
        .select('*')
        .not('published', 'is', null)
        .limit(6);
    const blogs = await client
        .from('Blog')
        .select('*')
        .not('published', 'is', null)
        .limit(6);

    // Filter out the published

    return {
        props: {
            projects: projects.data,
            blogs: blogs.data,
        },
    };
}

export default Home;
