{
  description = "My static website/blog @ behaviour.space";
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  inputs.flake-utils.url = "github:numtide/flake-utils";

  outputs = { self, nixpkgs, flake-utils}:
    flake-utils.lib.eachDefaultSystem (system: let
      pkgs = nixpkgs.legacyPackages.${system};
      haskellPackages = hsPkgs : with hsPkgs; [
        base hakyll pandoc bibtex

        haskell-language-server
      ];
      f = { mkDerivation, base, hakyll, pandoc, bibtex, lib }:
        mkDerivation {
          pname = "behaviour-space";
          version = "0.1.0.0";
          src = ./.;
          isLibrary = false;
          isExecutable = true;
          executableHaskellDepends = [ base hakyll pandoc bibtex ];
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
    devShells.default = pkgs.mkShell {
      packages = with pkgs; [
        (ghc.withPackages haskellPackages)

        ormolu

        bashInteractive
      ];
    };
  });
}
