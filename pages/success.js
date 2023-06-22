import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const Success = () => {
    return (
        <div className="min-h-[650px] flex items-center text-primary">
            <Wrapper>
                <div className="max-w-[600px] rounded-lg p-5 border border-primary mx-auto flex flex-col">
                    <div className="text-2xl font-bold">
                        ¡Gracias por comprar con nosotros!
                    </div>
                    <div className="text-lg font-bold mt-2">
                        Su pedido ha sido realizado con &#233;xito.
                    </div>
                    <div className="text-base mt-5">
                        Para cualquier consulta relacionada con el producto, envíe un correo electrónico a:
                    </div>
                    <div className="underline">hstore@shop.com</div>

                    <Link href="/" className="font-bold mt-5">
                        Contin&#250;e Comprando
                    </Link>
                </div>
            </Wrapper>
        </div>
    );
};

export default Success;