
type Book = {
    id: number;
    title: string;
    body: string;
}

async function getData(){
    const res = await fetch("http://localhost:3001/books",{
        next: {
            revalidate: 0,
        },
    });
    return res.json();
}
export default async function Page() {
    const books: Book[] = await getData();
    return (
        <>
            <h1>apiテスト</h1>
            {books.map((book) => (
                <div key={book.id}>{book.title}</div>
            ))}
        </>
    )
}
