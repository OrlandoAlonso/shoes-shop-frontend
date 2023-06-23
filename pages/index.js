import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";

export default function Home() {
    return (
        <main className="">
            <HeroBanner />
            <Wrapper>
                <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                    <div className="text-[24px] md:text-[28px] mb-5 font-semibold leading-tight">
                        AMORTIGUACIÓN PARA TUS CARRERAS
                    </div>
                    <div className="text-base md:text-lg">
                        Una ligera entre suela Nike ZoomX se combina con una mayor altura de la media suela para ayudar a proporcionar amortiguación durante largos tramos de carrera
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-14 px-5 md:px-0">
                    <ProductCard
                        id={1}
                        src={"/air-jordan-1-mid-se-raft.jpeg"}
                        nombre={"Air Jordan 1 Mid SE Craft"}
                        price={200}
                        original_price={250}
                    />
                    <ProductCard
                        id={2}
                        src={"/air-jordan-1-mid-se.webp"}
                        nombre={"Air Jordan 1 Mid SE"}
                        price={150}
                        original_price={180}
                    />
                    <ProductCard
                        id={3}
                        src={"/air-jordan-xxxvii-low-pf.webp"}
                        nombre={"Air Jordan XXXVII Low PF"}
                        price={120}
                        original_price={160}
                    />
                    <ProductCard
                        id={4}
                        src={"/jordan-why-not-6-pf.webp"}
                        nombre={"Jordan Why Not .6 PF"}
                        price={160}
                        original_price={200}
                    />
                    <ProductCard
                        id={5}
                        src={"/jordan-stay-loyal-2.webp"}
                        nombre={"Jordan Stay Loyal 2"}
                        price={120}
                        original_price={160}
                    />
                </div>
            </Wrapper>
        </main>
    );
}
