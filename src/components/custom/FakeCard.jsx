import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FakeCard = () => {
    return (
        <div style={{
            width: 290,
            padding: 10,
            borderRadius: 4,
            background: '#fff',
            boxShadow: '0 2px 8px #0000001d'
        }}
        >

            <Skeleton height={300} borderRadius={2} />

            {/* النجوم */}
            <div style={{ marginTop: 12 }}>
                <Skeleton height={20} width="40%" />
            </div>
            {/* الاسم  */}
            <div style={{ marginTop: 12 }}>
                <Skeleton height={20} width="80%" />
            </div>

            {/*  السعر */}
            <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
                <Skeleton height={20} width={40} borderRadius={5} />
                <Skeleton height={20} width={40} borderRadius={5} />
                {/* <Skeleton height={36} width={80} borderRadius={20} /> */}
            </div>

        </div>
    )
}

export default FakeCard;
