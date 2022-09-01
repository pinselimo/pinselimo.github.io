{
  description = "My static website/blog @ behaviour.space";
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  inputs.flake-utils.url = "github:numtide/flake-utils";

  outputs = { self, nixpkgs, flake-utils}:
    flake-utils.lib.eachDefaultSystem (system: let
      pkgs = nixpkgs.legacyPackages.${system};
      f = { mkDerivation, base, hakyll, lib }:
        mkDerivation {
          pname = "behaviour-space";
          version = "0.1.0.0";
          src = ./.;
          isLibrary = false;
          isExecutable = true;
          executableHaskellDepends = [ base hakyll ];
          license = "unknown";
          mainProgram = "site";
        };
      drv = pkgs.haskellPackages.callPackage f {};
    in {
    checks.benchmark = pkgs.haskell.lib.doBenchmark(drv);
    packages.default = drv;
    apps.default = {
      type = "app";
      program = "${drv}/bin/site"; 
    };
  });
}
