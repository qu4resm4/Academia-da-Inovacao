import Header from "./header";

export default function Pagina(props: any) {
    return (
        <>
            <Header/>
            <main>
                {props.children}
            </main>
        </>
    )
}