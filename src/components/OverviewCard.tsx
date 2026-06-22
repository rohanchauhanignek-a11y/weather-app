const OverviewCard = ({ item }: any) => {
  return (
    <div className="bg-[hsl(223,38%,30%)] w-[10%] rounded-lg text-white 
                    grid grid-cols-1 gap-1 pb-2 pt-2 
                    hover:bg-white/20 hover:shadow-lg cursor-pointer">
      <div className="flex justify-center pt-1 ]">
        {item.icon}
      </div>

      <div className="flex justify-center text-xs">
        <div>{item.title}</div>
      </div>

      <div className="text-2xl flex justify-center">
        <div>{item.count}</div>
      </div>

    </div>
  )
}

export default OverviewCard