{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
    packages = with pkgs; [
        yarn nodejs-16_x
        libxml2 # xmllint
    ];
}
