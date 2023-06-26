import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qejcuwpiemsoqnxawnbh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlamN1d3BpZW1zb3FueGF3bmJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc3MDU4NjMsImV4cCI6MjAwMzI4MTg2M30.Bdk12BfMl3-C4D9GwJal_WkIDDLhiYKu03R6Ee0Sbss";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
