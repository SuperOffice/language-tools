export const NSDSAParameters = `class NSDSAParameters {
    Integer GetCounter();
    NSBinary GetG();
    NSBinary GetJ();
    NSBinary GetP();
    NSBinary GetQ();
    NSBinary GetSeed();
    NSBinary GetY();
    Void SetCounter(Integer counter);
    Void SetG(NSBinary value);
    Void SetJ(NSBinary value);
    Void SetP(NSBinary value);
    Void SetQ(NSBinary value);
    Void SetSeed(NSBinary value);
    Void SetY(NSBinary value);
}`;