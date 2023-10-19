import { Megaphone } from '~/Icons'

export const CalloutHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border-jerma-light-blue/20 border-b text-jerma-light-blue text-center pb-4 pt-5 text-base flex items-center justify-center gap-2">
      <Megaphone />
      {children}
    </div>
  )
}
