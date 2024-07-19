import Link from "next/link";

async function fetchRepoContents(name) {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const res = await fetch(`https://api.github.com/repos/bradtraversy/${name}/contents`, {
        next: {
            revalidate: 60
        }
    });
    const contents = await res.json();

    return contents;
}

const RepoDirs = async ({name}) => {
    const contents = await fetchRepoContents(name);
    const dirs = contents.filter((content) => content.type === 'dir')

    return (
        <>
            <h3>Directories</h3>
            <ul>
                {dirs.map((dir) => (
                    <li key={dir.name}>
                        <Link href={`/code/repos/${name}/${dir.name}`}>
                            {dir.path}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default RepoDirs