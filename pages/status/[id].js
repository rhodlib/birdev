import Birdit from 'components/Birdit';

export default function BirditPage(props) {
    return (
        <>
            <Birdit {...props} />
        </>
    );
}

export async function getServerSideProps(context) {
    const { params, res } = context;
    const { id } = params;

    const apiResponse = await fetch(`http://localhost:3000/api/birdits/${id}`);

    if (apiResponse.ok) {
        const props = await apiResponse.json();
        return { props };
    }
    if (res) {
        res.writeHead(301, { Location: '/home' }).end();
    }
}
