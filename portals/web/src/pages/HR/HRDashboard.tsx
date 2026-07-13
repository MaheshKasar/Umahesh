import { useEffect } from "react";
import { supabase } from "../../services/supabase/client";

useEffect(() => {
  console.log("Supabase Connected:", supabase);
}, []);
