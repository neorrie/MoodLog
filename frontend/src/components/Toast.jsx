import { Toaster, toast } from "sonner";
function Toast() {
  return (
    <div>
      <Toaster richColors position="top-right" />
      <button onClick={() => toast("My first toast")}>Give me a toast</button>
    </div>
  );
}

export default Toast;
