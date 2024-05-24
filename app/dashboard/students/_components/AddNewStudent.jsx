"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

const AddNewStudent = () => {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Data", data);
  };

  return (
    <div>
      <Button pnClick={() => setOpen(true)}>+ Add New Student</Button>
      <Dialog open={open}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Student</DialogTitle>
            <DialogDescription>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="py-2">
                  <label>Full Name</label>
                  <Input
                    placeholder="Ex. Ramesh Kumar"
                    {...register("name", { required: true })}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label>Select Grade</label>
                  <select
                    className="p-3 border rounded-lg"
                    {...register("grade", { required: true })}
                  >
                    <option>5th</option>
                    <option>6th</option>
                    <option>7th</option>
                  </select>
                </div>
                <div className="py-2">
                  <label>Contact Number</label>
                  <Input
                    placeholder="Ex. 1234567890"
                    type="number"
                    {...register("contact", { required: true })}
                  />
                </div>
                <div className="py-2">
                  <label>Address</label>
                  <Input
                    placeholder="Ex. 12 Flower Garden, HP"
                    {...register("address", { required: true })}
                  />
                </div>
                <div className="flex gap-3 items-center justify-end mt-5">
                  <Button onClick={() => setOpen(false)} variant="ghost">
                    Cancel
                  </Button>
                  <Button type="submit">Save</Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default AddNewStudent;
