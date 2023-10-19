export const JermaSpin = ({
  rave,
  setClickCount,
}: {
  rave: Boolean
  setClickCount: React.Dispatch<React.SetStateAction<number>>
}) => {
  return (
    <div className="select-none mt-8 flex justify-center relative items-center scale-90">
      <div
        onClick={() => setClickCount((x) => x + 1)}
        className={`bg-jerma-pink/20 absolute h-60 w-60 border-4 animate-wiggle border-dashed border-jerma-pink rounded-full -z-10 rotate-45 hover:bg-jerma-pink/25 cursor-pointer active:bg-jerma-pink/30 peer ${
          !rave ? '' : 'opacity-0 pointer-events-none'
        }`}
      />
      <img
        src={'/JermaSPIN1.gif'}
        alt=""
        onClick={() => setClickCount((x) => x + 1)}
        width={182}
        height={193}
        className={` w-auto h-48 peer-active:duration-0 peer-active:scale-75 transition-transform pointer-events-none duration-500 ${
          !rave ? '' : 'absolute opacity-0'
        }
                }`}
      />
      <img
        src={'/JermaRave1.gif'}
        alt=""
        onClick={() => setClickCount((x) => x + 1)}
        width={182}
        height={193}
        className={` w-auto h-48 peer-active:duration-0 peer-active:scale-75 transition-transform scale-125 hover:scale-110 duration-200 active:duration-0 active:scale-75 ${
          !rave ? 'opacity-0 pointer-events-none absolute' : ''
        }
                }`}
      />
    </div>
  )
}
