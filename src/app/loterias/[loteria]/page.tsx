// import TabsSection from "@/components/tabssection";
interface Props {
  params: { loteria: string };
}

export default function Loteria({ params }: Props) {
  return (
    <main>
      <div className="grid grid-cols-12 w-full h-[calc(100vh-2.9rem)]">
        <div className="col-span-10 p-2 ">
          <h2 className="text-base  font-bold mb-2">{params.loteria}</h2>
          {/* <TabsSection /> */}
        </div>
      </div>
    </main>
  );
}
