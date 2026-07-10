# Modifications to simple-knn

This is a **modified fork** of the upstream `simple-knn` project,
not the original upstream release.

## Upstream provenance

- upstream_url: `https://github.com/camenduru/simple-knn`
- original_author: Inria GRAPHDECO (source headers)
- license: Inria non-commercial research license (same terms as diff-gaussian-rasterization)

## Modifications

### Source-level changes

The following files differ from the upstream original:

- `ext.cpp`: modified Pybind11 binding setup
- `setup.py`: modified build configuration
- `simple_knn.cu`: modified CUDA kernel implementation
- `simple_knn.h`: modified header definitions
- `spatial.cu`: modified spatial computation kernel
- `spatial.h`: modified spatial computation header

These changes adapt the extension for WorldEvals' build environment and
integration requirements, ensuring compatibility with the modified
`diff-gaussian-rasterization` fork.

## Purpose

Used by 4D-GS and other Gaussian splatting models in WorldEvals as a dependency
for computing average nearest-neighbor distances over 3D point sets, which is
needed for point cloud initialization and density estimation.
