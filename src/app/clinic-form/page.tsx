import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import ClinicForm from "./components/form";

const ClinicFormPage = () => {
  return (
    <Dialog open={true}>
      <form>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Adicione uma clínica para continuar</DialogTitle>
          </DialogHeader>
          <ClinicForm />
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default ClinicFormPage;
