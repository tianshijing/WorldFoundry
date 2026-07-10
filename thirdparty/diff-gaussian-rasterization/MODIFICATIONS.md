# Modifications to diff-gaussian-rasterization

This is a **modified fork** of the upstream `diff-gaussian-rasterization` project,
not the original upstream release.

## Upstream provenance

- upstream_url: `https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/`
- upstream_repo: Inria GRAPHDECO, `https://github.com/graphdeco/diff-gaussian-rasterization`
- license: Inria non-commercial research license (see `LICENSE.md` in upstream)

## Modifications

### Depth output added

The forward pass of `_RasterizeGaussians` now returns **depth** in addition to `color` and `radii`:

```python
# Original upstream:
num_rendered, color, radii, geomBuffer, binningBuffer, imgBuffer = _C.rasterize_gaussians(*args)
return color, radii

# This fork:
num_rendered, color, depth, radii, geomBuffer, binningBuffer, imgBuffer = _C.rasterize_gaussians(*args)
return color, radii, depth
```

### Backward pass updated for depth gradients

The backward function signature and args now include `grad_depth`:

```python
# Original upstream:
def backward(ctx, grad_out_color, _):
    # args omit grad_depth

# This fork:
def backward(ctx, grad_out_color, grad_radii, grad_depth):
    # args include grad_depth
```

### CUDA kernel changes

- `rasterize_points.cu`: extended to compute and return per-pixel depth
- `cuda_rasterizer/forward.h`, `forward.cu`, `backward.h`, `backward.cu`: updated
  to propagate depth through the rasterization pipeline
- `rasterizer.h`: struct definitions extended for depth buffers

## Purpose

These modifications enable depth rendering alongside color, which is required by
WorldEvals' 3D/4D Gaussian model evaluation tasks (4D-GS, pixelSplat, etc.) that
need depth maps as part of their output.
