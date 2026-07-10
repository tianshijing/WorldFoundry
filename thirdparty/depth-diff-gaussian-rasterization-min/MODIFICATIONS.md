# Modifications to depth-diff-gaussian-rasterization-min

This is a **heavily modified fork** of the upstream `diff-gaussian-rasterization` project,
not the original upstream release. It extends the depth-only fork further with
additional outputs.

## Upstream provenance

- upstream_url: `https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/`
- upstream_repo: Inria GRAPHDECO, `https://github.com/graphdeco/diff-gaussian-rasterization`
- license: Inria non-commercial research license (same as upstream diff-gaussian-rasterization)

## Modifications

### Extended output: depth, median_depth, final_opacity

The forward pass returns five values instead of the upstream's two:

```python
# Original upstream:
num_rendered, color, radii, geomBuffer, binningBuffer, imgBuffer = _C.rasterize_gaussians(*args)
return color, radii

# This fork:
num_rendered, color, depth, median_depth, final_opacity, radii, geomBuffer, binningBuffer, imgBuffer = _C.rasterize_gaussians(*args)
return color, radii, depth, median_depth, final_opacity
```

### Backward pass updated

```python
# Original upstream:
def backward(ctx, grad_out_color, _):

# This fork:
def backward(ctx, grad_out_color, grad_radii, grad_depth, grad_median_depth, grad_final_opacity):
    # args include grad_depth (same as depth fork)
```

### CUDA kernel changes

- `rasterize_points.cu`: extended to compute per-pixel **depth**, **median depth**,
  and **final opacity** alongside color
- `cuda_rasterizer/`: all forward/backward kernel files updated for the additional
  output channels

## Purpose

This minimal depth-focused variant is used by WorldEvals models that require
detailed depth information (median depth, final opacity) for evaluation metrics
such as depth accuracy and scene reconstruction quality.
